import express from 'express'
import CourseControl from '../controller/CourseControl.js'

const router=express.Router()

router.get('/:slug',CourseControl.detail)
router.get('/',CourseControl.show)

export default router