import express from 'express';
import { login, dashboard } from '../controllers/main.js';
export const router = express.Router();

router.route('/dashboard').get(dashboard);
router.route('/login').post(login);
