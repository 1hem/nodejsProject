
const Data = require('../data/products.json')
const express = require('express');
const router = express.Router();

router.get('/',(req,res)=>{
    const {category} = req.query
    //check if category is defined or not
    // if not undefined, filter the data by provided category
    if(category){
        const filterData = Data.filter((product)=>
        product.category ===category );
        res.json(filterData);
    }else{
        res.json(Data)
    }
    })

// router.get('/1',(req,res)=>{
//     res.json(Data[0])
// })

// router.get('/2',(req,res)=>{
//     res.json(Data[1])
// })

// router.get('/3',(req,res)=>{
//     res.json(Data[2])
// })

// route parameter
router.get('/:productID',(req,res)=>{
    // console.log(req.params)
    const {productID} = req.params
    res.json(Data[productID])
});


module.exports = router;