import handlebars from 'handlebars'
const helpers = {
    sum: (a, b) => a + b,
    sortable: (field, sort) => {
        const types = {
            'default': 'desc',
            'asc': 'desc',
            'desc': 'asc'
        }
        const icons = {
            'default': 'bi bi-arrow-down-up',
            'asc': 'bi bi-arrow-90deg-up',
            'desc': 'bi bi-arrow-90deg-down'
        }
        var sortType = (field === sort.column) ? sort.type : 'default'
        // Config apart from malicious code
        const href = handlebars.escapeExpression(`?sort&column=${field}&type=${types[sortType]}`)
        const link = `<a class="${icons[sortType]}" href="${href}"></a>`
        return new handlebars.SafeString(link)
    }
}
export default helpers   