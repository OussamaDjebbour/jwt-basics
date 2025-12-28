import express from 'express';
import { login, dashboard } from '../controllers/main.js';
export const router = express.Router();

import authenticationMiddleware from '../middleware/auth.js';

router.route('/login').post(login);

router.route('/dashboard').get(authenticationMiddleware, dashboard);
