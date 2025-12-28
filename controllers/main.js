import CustomAPIError from '../errors/custom-error.js';
import jwt from 'jsonwebtoken';

export const login = async (req, res) => {
  const { username, password } = req.body;

  if (!username || !password) {
    throw new CustomAPIError('Please provide email and password', 400);
  }

  const id = new Date().getTime();

  const token = jwt.sign({ id, username }, process.env.JWT_SECRET, {
    expiresIn: '30d',
  });

  res.status(200).json({ msg: 'User created', token });
};

export const dashboard = async (req, res) => {
  console.log('req', req.user);

  const luckuNumber = Math.floor(Math.random() * 100);
  // console.log(luckuNumber);
  res.status(200).json({
    msg: `Hello ${req.user.username} `,
    secret: `Here is your authorized data, your luck number is ${luckuNumber}`,
  });
};
