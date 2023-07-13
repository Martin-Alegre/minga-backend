import Category from "../../models/Category.js"

const all_paginated = async (req,res)=>{
    try{

        let pagination = {page:1, limit:4}
        if(req.query.page){
            pagination.page = req.query.page
        }
        if(req.query.quantity){
            pagination.limit = req.query.quantity
        }
        let page= await Category.find()
        .skip(pagination.page > 0 ? (pagination.page-1)*pagination.limit : 0)
        .limit( pagination.limit > 0 ? pagination.limit : 0)
        return res
            .status(200)
            .json({ categories: page})
    }
    catch (error){
        console.log(error);
    }
} 
export default all_paginated