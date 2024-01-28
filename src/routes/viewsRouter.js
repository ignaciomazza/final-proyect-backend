import { Router } from "express";
import { getCartById, getProducts, getProductsLogged, realTimeProducts, chat, signup, login, logout, failregister, profile, sendResetPassword, resetPassword } from "../controllers/viewController.js";
import publicRoutes from "../middlewares/publicRoutes.js";
import privateRoutes from "../middlewares/privateRoutes.js";
import userRoutes from "../middlewares/userRoutes.js";
import logger from "../services/logger.js";

const router = Router();

router.get("/test-error", async (req, res, next) => {
  try {
    throw new Error("Este es un error de prueba");
  } catch (error) {
    logger.error(error.message);
    next(error);
  }
});
router.get("/", getProducts);
router.get("/products", getProductsLogged);
router.get("/cart/:cId", getCartById);
router.get("/realtimeproducts", userRoutes, realTimeProducts);
router.get("/chat", userRoutes, chat);
router.get("/signup", publicRoutes, signup);
router.get("/login", publicRoutes, login);
router.get("/logout", logout);
router.get("/sendResetPassword", sendResetPassword);
router.get("/resetPassword/:rId", resetPassword)
router.get("/failregister", failregister);
router.get("/profile", privateRoutes, profile);

export default router;