import mssql from 'mssql'

const config={
    server:'localhost',
    port:1433,
    database:'ManagerUser',
    user:'sa',
    password:'Anhquy28',
    options: {
        trustServerCertificate:true
    }
}
async function connect() {
    const connection=await mssql.connect(config)
    return connection.request()
}
export default { connect }