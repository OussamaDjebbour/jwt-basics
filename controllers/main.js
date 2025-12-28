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
  console.log(req.headers);

  const authHeader = req.headers.authorization;

  if (!authHeader || !authHeader.startsWith('Bearer ')) {
    throw new CustomAPIError('No token provided', 401);
  }

  const token = authHeader.split(' ')[1];
  console.log(token);

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    console.log(decoded);

    const luckuNumber = Math.floor(Math.random() * 100);
    console.log(luckuNumber);
    res.status(200).json({
      msg: `Hello ${decoded.username} `,
      secret: `Here is your authorized data, your luck number is ${luckuNumber}`,
    });
  } catch (error) {
    throw new CustomAPIError('Not authorized to access this route ', 401);
  }
};
