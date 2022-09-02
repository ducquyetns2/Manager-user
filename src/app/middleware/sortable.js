function sortable(req, res, next) {
    res.locals.sort = {
        type: 'default'
    }
    if (req.query.hasOwnProperty('sort')) {
        var isValid = ['asc', 'desc'].includes(req.query.type)
        req.query.type = (isValid) ? req.query.type : 'desc'
        Object.assign(res.locals.sort, {
            type: req.query.type,
            column: req.query.column
        })
    }
    next()
}
export default sortable