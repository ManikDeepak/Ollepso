const express = require('express')
const cors = require("cors")
const bodyparser = require("body-parser")

const app = express()

app.use(express.static('public'))
app.use(bodyparser.urlencoded({extended: false}))
app.use(bodyparser.json())
app.use(cors({origin:true, credentials:true}))

const stripe = require("stripe")("sk_test_51MbMZ2SDXGYFEWooSc5n3JJ41Lf9J369YBQR593BqITO0yIRMfeczpDPRTUvKel2ew347cL7fWGXfqP3WUVLDe8x00Dol4ki96")

app.post("/checkout",async(req,res,next)=>{
    try{
        const session = await stripe.checkout.sessions.create({
            line_items: req.body.items.map((item)=>({
                price_data:{
                    currency: 'usd',
                    unit_amount: 2000,
                    product_data:{
                        name: item.name,
                        image: item.image
                    }
                },
                quantity: item.quantity
            })),
            mode: 'payment',
            success_url: "http://localhost:4242/success.html",
            cancel_url: "http://localhost:4242/cancel.html",
        })
        res.status(200).json(session)
    }catch(error){
        next(error)
    }
})

app.listen(4242,()=>{
    console.log("Server started at http://localhost:4242")
})