function succes(data,message,status){
    return {
            succes : status,
            message : message,
            data : data
           }
}

function notFound(data,message,status) {
    return {
            succes : status,
            message : message,
            data : data
           }
}

module.exports = {
    succes,
    notFound
}