import express from 'express'
import HomeControl from '../controller/HomeControl.js'

const router=express.Router() 

router.get('/',HomeControl.show)

export default router