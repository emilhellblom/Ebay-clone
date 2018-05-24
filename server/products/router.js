const Product = require("./model")
const Router = require('express').Router

const router = new Router()


router.get('/products', (req, res) => {
    console.log('DOES ANYTHING HAPPEN HERE??')
    Product.findAll({
        attributes: ['title', 'price']
    })
    .then(result => {
	    res.send({
	    	products: result
	    })
	  })
    .catch(err => {
        res.status(500).send({error: 'Something went wrong'})
    })
})

router.get('/products/:title', (req, res) => {
    const productTitle = req.params.title
    console.log(productTitle)
    Product.findOne({
        where: {title: productTitle}
    }).then(result => {
        res.send(result)
    })
})

router.post('/products', (req, res) => {
    const product = req.body
  
    Product.create(product).then(entity => {
        res.status(201).send(entity)
    })
  })

module.exports = router
