import express from "express";
import { postContact, getContacts } from "../controllers/contactController.js";

const router = express.Router();

router.post("/", postContact);
router.get("/", getContacts);

export default router;
