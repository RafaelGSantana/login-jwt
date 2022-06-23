require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const cors = require('cors');

const app = express();

app.use(cors());
app.use(express.json());

// Models
const User = require('./models/User');

// Public Route
app.get('/', (req, res) => {
   res.status(200).json({
      message: 'Bem vindo a nossa api!'
   });
});

// Private Route
app.get("/user/:id", checkToken, async (req, res) => {
   const id  = req.params.id;
   const authHeader = req.headers['authorization'];
   const token = authHeader && authHeader.split(" ")[1];

   // Check if user exists
   const user =  await User.findById(id, '-password');

   if(!user) {
      return res.status(404).json({ message: "Usuário não encontrado." });
   }

   // Retorna dados do usuário + o token JWT
   return res.status(200).json({ user, token });
});

// Middleware Check Token
function checkToken(req, res, next) {
   const authHeader = req.headers['authorization'];
   const token = authHeader && authHeader.split(" ")[1];

   if(!token) {
      return res.status(401).json({ message: "Acesso negado." });
   }

   try {
      const secret = process.env.SECRET;

      jwt.verify(token, secret);

      next();
   } catch (error) {
      return res.status(400).json({ message: "Token inválido." })
   }
}

// Register Route
app.post('/auth/register', async (req, res) => {
   const { name, email, password, confirmPassword} = req.body;

   // validations
   if (!name) {
      return res.status(422).json({ message: 'O nome é obrigatório!'});
   }

   if (!email) {
      return res.status(422).json({ message: 'O e-mail é obrigatório!'});
   }

   if (!password) {
      return res.status(422).json({ message: 'A senha é obrigatório!'});
   }

   if (!confirmPassword) {
      return res.status(422).json({ message: 'A confirmação de senha é obrigatório!'});
   }

   if (confirmPassword !== password) {
      return res.status(422).json({ message: 'As senhas não conferem!'});
   }

   // Check if user already exists
   const userExists = await User.findOne({ email: email });

   if(userExists) {
      res.status(422).json({ message: 'E-mail utilizado já está cadastrado!'});
      return;
   }

   // Create password
   const salt = await bcrypt.genSalt(12);
   const passwordHash = await bcrypt.hash(password, salt);

   // Create User
   const user =  new User({
      name,
      email,
      password: passwordHash
   });

   try {
      await user.save();
      res.status(201).json({ message: 'Usuário cadastrado com sucesso!'})
   } catch (error) {
      console.log(error)
      res.status(500)
         .json({ message: 'Ocorreu um erro no nosso servidor. Por favor, tente novamente mais tarde!'});
   }

});

// Login Route
app.post('/auth/login', async (req, res) => {
   const { email, password } = req.body;

   // validations
   if (!email) {
      return res.status(422).json({ message: 'O e-mail é obrigatório!'});
   }

   if (!password) {
      return res.status(422).json({ message: 'A senha é obrigatório!'});
   }

   // Check if user already exists
   const user = await User.findOne({ email: email });

   if(!user) {
      return res.status(404).json({ message: 'Usuário não encontrado, por favor verifique o e-mail digitado!'});
   }

   // Check if password match
   const checkPassword = await bcrypt.compare(password, user.password);

   if(!checkPassword) {
      return res.status(422).json({ message: 'Senha inválida!'});
   }

   try {
      const secret = process.env.SECRET;

      const token = jwt.sign({
         id: user._id,
      }, secret);

      const name = user.name;

      return res.status(200).json({ message: "Login realizado com sucesso!", name, token});
   } catch (error) {
      console.log(error)
      res.status(500)
         .json({ message: 'Ocorreu um erro no nosso servidor. Por favor, tente novamente mais tarde!'});
   }
});

// Credentials
const dbUser = process.env.DB_USER;
const dbPassword = process.env.DB_PASS;

mongoose.connect(
   `mongodb+srv://${dbUser}:${dbPassword}@cluster0.2y1lqwv.mongodb.net/?retryWrites=true&w=majority`
).then(() => {
   app.listen(3333)
   console.log("Conectou ao banco")
}).catch((error) => console.log(error))

