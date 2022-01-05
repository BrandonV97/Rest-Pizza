const { db } = require("../cnn")

const getPizzas = async (req,res)=>{
    const response = await db.any('select * from pizza')
    res.json(response)
}


const getPizzasByName = async (req,res)=>{
    const name = req.params.name
    const response = await db.any(`select * from pizza where piz_state = true and piz_name=$1`
    , [name])
    res.json(response)
}

const createPizza = async (req,res)=>{
    const {piz_name, piz_origin, piz_state } = req.query
    const response = await db.any(`INSERT INTO pizza(
        piz_name, piz_origin, piz_state)
        VALUES ($1,$2,$3)`, [piz_name, piz_origin, piz_state])
    res.json({
        message:'pizza creada correctamente',
        body:{
            piz_name, piz_origin, piz_state
        }
    })
}

const updatePizza = async (req,res)=>{
    const {piz_name, piz_origin, piz_state,piz_id } = req.query
    const response = await db.any(`UPDATE pizza	SET piz_name=$1, piz_origin=$2, piz_state=$3
	WHERE piz_id=$4 ;`, [piz_name, piz_origin, piz_state, piz_id])
    res.json({
        message:'pizza actualizada correctamente',
        body:{
            piz_id,piz_name, piz_origin, piz_state
        }
    })
}


const deletePizza = async (req,res)=>{
    const {piz_id, piz_name, piz_origin, piz_state } = req.query
    const response = await db.any(`DELETE FROM pizza
	WHERE piz_id=$1;`, [piz_id])
    res.json({
        message:'pizza actualizada correctamente',
        body:{
            piz_id
        }
    })
}


module.exports={
    getPizzas,
    getPizzasByName,
    createPizza,
    updatePizza,
    deletePizza
}