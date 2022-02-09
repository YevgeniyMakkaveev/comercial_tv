import React from "react";
import "./PhoneNumber.scss"

interface IPhoneNumber {
 phone: string;
}
const PhoneNumber:React.FC<IPhoneNumber> =({phone})=>{
 const renderPhoneNumber=(start:number,finish:number)=>{
  const res:string[]=[]
  for(let i=start;i<finish;i++){
   if(!phone[i]) {res.push("_")} else res.push(phone[i]) 
  }
  return <span className="keyboard__phone_el" key={Math.random()}>{res.join("")}</span>;
 }

 return <div className="keyboard__display">
  +7({renderPhoneNumber(0,3)}){renderPhoneNumber(3,6)}-{renderPhoneNumber(6,8)}-{renderPhoneNumber(8,10)}
 </div> 
}
export default PhoneNumber;