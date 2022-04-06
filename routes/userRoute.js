const express = require('express');
const router = express.Router();
const userController  = require('../controller/userController');
const cartController = require('../controller/cartController');
const orderController = require('../controller/orderController');

router.post('/register',userController.register);
router.post('/login',userController.login);
router.get("/view-user",userController.viewUser);
router.post("/add-to-fav-package",userController.addToFavPackage);
router.post("/add-to-fav-item",userController.addToFavItem);
router.get("/verifyByEmail/:userId",userController.verified);
router.post("/fav-foods-view",userController.viewFavFoods);

router.post("/add-package-to-cart",cartController.addPackage);
router.post("/add-item-to-cart",cartController.addItem);
router.get("/view-cart",cartController.viewCart);
router.post("/remove-package-from-cart",cartController.removePackage);
router.post("/remove-item-from-cart",cartController.removeItem);
router.delete("/delete-cart",cartController.deleteCart);

router.post("/place-order",orderController.placeOrder);
router.get("/view-order/:uid",orderController.viewOrder);
router.get('/order-history',orderController.orderHistory);
router.post('/send-receipt',orderController.sendReceipt);




module.exports = router;