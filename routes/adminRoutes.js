const express=require("express");
const router=express.Router();
const Admin=require('../controller/adminController');

router.route('/')
.get(Admin.getAllAdmin)
.post(Admin.createAdmin)
router.route('/:id')
.get(Admin.getSingleAdmin)
//.post(Admin.createAdmin)
.patch(Admin.updateAdmin)
.delete(Admin.deleteSingleAdmin)
module.exports=router