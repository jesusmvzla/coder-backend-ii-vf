import { Router } from "express";
import { verifyToken } from "../utils/index.js";
import passport from "passport";
const router = Router();

router.get("/register", (req, res) => {
  res.render("register", { title: "Registro" });
});

router.get("/login", (req, res) => {
  res.render("login", { title: "Login" });
});

// router.get("/profile", (req, res) => {

//   passport.authenticate("jwt", { session: false }),
//   (req, res) => {
//     res.render("profile", { user: req.user.user });
//   }

// const token = req.cookies.authCookie;
// const { user } =  verifyToken(token)

// res.render("profile", {tittle: "PROFILE", user: user});
// });

router.get ("/profile", passport.authenticate("jwt", {session:false}),(req, res)=>{
  res.render("profile", { user: req.user.user });
})


router.get("/recupero", (req, res) => {
  res.render("recupero", { title: "Recuperar contraseña" });
});
export default router;
