import axios from '../axios'


export const request = (serviceObject) => axios(serviceObject)
.then(res => {
    return res.data;
})
.catch(err => {

})