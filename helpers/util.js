const token = "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJodHRwOi8vbmV3cmVzaS5sb2NhbDo3ODg4L2FwaS9hdXRoL2xvZ2luIiwiaWF0IjoxNTQwNzgyOTU4LCJuYmYiOjE1NDA3ODI5NTgsImp0aSI6ImlmT2loWjY1QVptems3dFkiLCJzdWIiOjEsInBydiI6Ijg3ZTBhZjFlZjlmZDE1ODEyZmRlYzk3MTUzYTE0ZTBiMDQ3NTQ2YWEifQ.O6O2xse4JOReyQutaAyxjmOGXAxEd3eDDIX1DWT96cI"

const axios = require('axios')

exports.resiCheck = ({courier,awb}) => {
    console.log(courier,awb)
    const config = {
        headers: {
          'Authorization': 'Bearer ' + token
        }
      }
    let promise =  axios.get(`https://resi.id/api/track?courier=${courier}&awb=${awb}`,config)
    return promise
    .then((res) => {
        data = res.data
        return data
    })
    .catch(err =>{
        return err
    })
}

