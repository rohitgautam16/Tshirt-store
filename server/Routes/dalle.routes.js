import express, {request, response}from 'express';
import * as dotenv from 'dotenv';
import OpenAI from "openai";

dotenv.config()

const openai = new OpenAI({
    apiKey: process.env.OPENAI_API_KEY,
  });

const router = express.Router()

router.route('/').get((req, res) => {
    res.status(200).json({message : 'Hello from DALL.E API Routes'})
})

router.route('/').post( async (req,res) => {
    try {
        const {prompt} = req.body

        const response = await openai.images.generate({
            prompt,
            n: 1,
            size: '1024x1024',
            response_format: 'b64_json'
        });

        const image = response.data[0].b64_json;

        res.status(200).json({photo : image})
        console.log('OpenAI Response:', response);
    } catch (error) {
       console.log(error);
       res.status(500).json({message: 'Something went wrong', error: error.message})  
    }
})





export default router