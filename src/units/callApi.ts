import {_api} from '../const'

const getData = async (phone:string)=>{
 const response = await fetch(`${_api}number=+7${phone}&country_code=&format=1`)
 const data:any = await response.json()
 console.log(data)
 
 if(data.valid) return data.valid
 return false
}
export default getData