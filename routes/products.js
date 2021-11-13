var express = require('express');
var router = express.Router();
const Validator = require('fastest-validator');
const v = new Validator();

const { Product } = require('../models');

router.post('/', async (req, res) => {
    const schema = {
        name: 'string',
        brand: 'string',
        description: 'string|optional'

    }
    const validate = v.validate(req.body, schema);
    if (validate.length) {
        return res.status(400).json(validate);
    }
    let product = await Product.create(req.body);
    res.json(product);

});

router.put('/:id', async (req, res) => {
    const id =  req.params.id;
    let product = await Product.findByPk(id)
    if(!product){
        return res.json({message:'Product not found'});
    }
    const schema = {
        name: 'string|optional',
        brand: 'string|optional',
        description: 'string|optional'

    }
    const validate = v.validate(req.body, schema);
    
    if (validate.length) {
        return res.status(400).json(validate);
    }
    product = await product.update(req.body);
    res.json(product);

});


module.exports = router;