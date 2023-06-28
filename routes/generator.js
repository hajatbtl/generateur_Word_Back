import express from "express";
import { generateApi } from "../controllers/GeneratorController.js";

const router = express.Router();
router.get('/:table', generateApi);
export default router;