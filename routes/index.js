const { Router } = require("express");
const { getPizzas, getPizzasByName, createPizza, updatePizza, deletePizza } = require("../controllers/pizza.controller");

const router = Router()
router.get('/pizzas',getPizzas)

router.get("/pizzas/:name", getPizzasByName)

router.post('/pizzas',createPizza)
router.put('/pizzas',updatePizza)
router.delete('/pizzas',deletePizza)



module.exports = router