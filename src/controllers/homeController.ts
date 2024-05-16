import { Request, Response } from "express";
import SecurePassword from "../services/SecurePassword";


export const store = (req: Request, res: Response) => {
  const { password } = req.body

  const { passwordIsValid, errors } = new SecurePassword(password);

  return res.json({ passwordIsValid, errors })

}