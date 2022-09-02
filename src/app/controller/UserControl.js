import UserModal from '../modal/MongoDB/Modal/UserModal.js'
import { convertObject } from '../../util/helper.js'
import Sql from '../modal/SQLServer/connectSQL.js'

class UserControl {
    // Connect to SQL Server
    async showSql(req, res, next) {
        const request = await Sql.connect()
        request.query('select * from users')
            .then(users => {
                var newUsers = users.recordset
                res.render('user/userShow', { newUsers })
            })
            .catch(next)
    }
    show(req, res, next) {
        Promise.all([UserModal.find().sortable(req), UserModal.countDeleted()]).then(([users, count]) => {
            var newUsers = convertObject(users)
            res.render('user/userShow', { newUsers, count })
        }).catch(next)
    }
    register(req, res) {
        res.render('user/userRegister')
    }
    stored(req, res, next) {
        var data = req.body
        var newUser = new UserModal(data)
        newUser.save().then(() => {
            res.redirect('/user')
        }).catch(next)
    }
    edit(req, res, next) {
        var id = req.params.id
        UserModal.findById(id).then(user => {
            var userEdit = convertObject(user)
            res.render('user/userEdit', { userEdit })
        }).catch(next)
    }
    update(req, res, next) {
        var id = req.params.id
        var data = req.body
        UserModal.updateOne({ _id: id }, data).then(() => {
            res.redirect('/user')
        }).catch(next)
    }
    delete(req, res, next) {
        var id = req.params.id
        UserModal.delete({ _id: id }).then(() => {
            res.redirect('back')
        }).catch(next)
    }
    rubbish(req, res, next) {
        UserModal.findDeleted().then(usersDeleted => {
            var newUsers = convertObject(usersDeleted)
            res.render('user/userRubbish', { newUsers })
        }).catch(next)
    }
    destroy(req, res) {
        var id = req.params.id
        UserModal.deleteOne({ _id: id }).then(() => {
            res.redirect('back')
        }).catch(next)
    }
    restore(req, res, next) {
        var id = req.params.id
        UserModal.restore({ _id: id }).then(() => {
            res.redirect('back')
        }).catch(next)
    }
    action(req, res, next) {
        var { action, userIds } = req.body
        switch (action) {
            case 'delete':
                // Delete many old
                // UserModal.delete({_id: { $in: userIds }}).then(() => {
                //     res.redirect('back')
                // })
                // Delete many new
                UserModal.delete({ _id: userIds }).then(() => {
                    res.redirect('back')
                }).catch(next)
                break
            default: throw new Error('Action unvalid')
        }
    }
}
export default new UserControl