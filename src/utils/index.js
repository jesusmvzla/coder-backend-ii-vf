import { dirname, join } from "path";
import { fileURLToPath } from "url";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

const JWT_SECRET = "coderjm89";
const __filename = fileURLToPath(import.meta.url);
const __dirname = join(dirname(__filename), "..");

export const createHash = (password) =>
  bcrypt.hashSync(password, bcrypt.genSaltSync(10));

export const isValidPassword = (password, hash) =>
  bcrypt.compareSync(password, hash);

export const generateToken = (user) =>
  jwt.sign({ user }, JWT_SECRET, { expiresIn: "1h" });

export const verifyToken = (token) => {
  try {
    return jwt.verify(token, JWT_SECRET);
  } catch (error) {
    return null;
  }
};

export { join, __dirname, JWT_SECRET };
