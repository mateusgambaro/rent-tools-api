const loginValidation = (req, res, next) => {
  const { email, password } = req.body;

  if (email === undefined) {
    return res.status(400).json({ message: '"email" is required' });
  }
  if (password === undefined) {
    return res.status(400).json({ message: '"password" is required' });
  }
  if (email === "") {
    return res.status(400).json({ message: "Preencha o campo de email" });
  }
  if (password === "") {
    return res.status(400).json({ message: "Preencha o campo de senha" });
  }
  next();
};

const emailValidation = (req, res, next) => {
  const { email } = req.body;

  const regex = /^[a-z0-9.]+@[a-z0-9]+\.[a-z]+(\.([a-z]+))?$/i;

  if (!email) {
    return res.status(400).json({ message: 'Digite um email' });
  }

  if (!regex.test(email)) {
    return res.status(400).json({ message: 'O email deve ter um formato válido' });
  }

  next();
};

const passwordValidation = (req, res, next) => {
  const { password } = req.body;

  if (!password) {
    return res.status(400).json({ message: 'Digite uma senha' });
  }
  if (password.length <= 6) {
    return res
      .status(400)
      .json({ message: 'A senha deve conter mais de 6 caracteres' });
  }

  next();
};

module.exports = {
  emailValidation,
  passwordValidation,
  loginValidation,
};
