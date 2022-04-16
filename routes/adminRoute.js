const express = require("express");
const router = express.Router();
const multer = require('multer');
var storage = multer.diskStorage({
    destination:'public/images',
    filename:function(request,file,cb){
        cb(null , Date.now()+file.originalname);
    }
});
var upload=multer({storage: storage});
const packageController = require('../controller/packageController');
const adminController = require('../controller/adminController');
const categoryController = require('../controller/categoryController');
const itemController = require('../controller/itemController');
const firebase = require("../midelware/firebase");
const tokenVarification = require("../midelware/tokenVarification");


router.post('/add-category',tokenVarification.varifyToken,upload.single('catImage'),firebase.fileUpload,categoryController.addCategory);
router.post('/update-category',tokenVarification.varifyToken,upload.single('catImage'),firebase.fileUpload,categoryController.updateCategory);
router.get('/view-category',categoryController.ViewCategory);
router.delete('/delete-category',tokenVarification.varifyToken,categoryController.deleteCategory);


router.post('/add-package',tokenVarification.varifyToken,upload.single('packageImage'),firebase.fileUpload,packageController.addPackage);
router.get('/view-package',tokenVarification.varifyToken,packageController.viewPackage);
router.post('/update-package',tokenVarification.varifyToken,upload.single('packageImage'),firebase.fileUpload,packageController.packageUpdate);
router.delete('/delete-package',tokenVarification.varifyToken,packageController.packageDelete);
router.get("/available-package",tokenVarification.varifyToken,packageController.availablePackages);
router.get("/today-meal-option",tokenVarification.varifyToken,packageController.todayMealOption);

router.post('/add-item',tokenVarification.varifyToken,upload.single("itemImage"),firebase.fileUpload,itemController.addItem);
router.get('/view-item',tokenVarification.varifyToken,itemController.viewItem);
router.post('/update-item',tokenVarification.varifyToken,upload.single("itemImage"),firebase.fileUpload,itemController.updateItem);
router.delete('/delete-item',tokenVarification.varifyToken,itemController.deleteItem);



router.post('/login',adminController.login);

module.exports =router;
//625004acecef3b446ef271f1
//625019f1ecef3b446ef271f3   product