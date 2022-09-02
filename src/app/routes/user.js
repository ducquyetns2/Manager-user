import express from 'express'
import UserControl from '../controller/UserControl.js'

const router=express.Router()

router.patch('/:id/restore',UserControl.restore)
router.delete('/:id/destroy',UserControl.destroy)
router.delete('/:id/delete',UserControl.delete)
router.put('/:id/update',UserControl.update)
router.post('/register/stored',UserControl.stored)
router.post('/action',UserControl.action)
router.get('/rubbish',UserControl.rubbish)
router.get('/:id/edit',UserControl.edit)
router.get('/register',UserControl.register)
router.get('/',UserControl.show)

export default router