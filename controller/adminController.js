const user=require('../models/userSchema')
const mongoose=require('mongoose');
//getting all Admin
exports.getAllAdmin= async (req,res)=>{
    try{
        const Users =user.aggregate([
            {
                $sort:{
                    [sortBy]: sortBy == "createdAt" ? -1 : 1,
                }
            },
            {
                $facet: {
                  data: [
                    {
                      $skip: skips,
                    },
                    {
                      $limit: limit,
                    },
                  ],
                  count: [
                    {
                      $count: "count",
                    },
                  ],
                },
              },
        ])
        res.status(200).json({
            status:"ok",
            message:Users
        })
    }
    catch(err){
        console.error(err.message)
    }
}

//getting sing Admin
