import React from "react";

import { IContactFormComponent } from "../../../types/types";
import "./PhoneNumber.scss"

const PhoneNumber:React.FC<IContactFormComponent> =({phone,isValid})=>{
 const renderPhoneNumber=(start:number,finish:number)=>{
  const res:string[]=[]
  for(let i=start;i<finish;i++){
   if(!phone[i]) {res.push("_")} else res.push(phone[i]) 
  }
  return <span className="keyboard__phone_el" key={Math.random()}>{res.join("")}</span>;
 }
const classDispathc=(isValid:boolean|null)=>{
 if(isValid===true){ return "phone__valid"}
 if(isValid===false){return "phone__invalid"}
 return ""
}

 return <div className={`keyboard__display ${classDispathc(isValid)}`}>
  +7({renderPhoneNumber(0,3)}){renderPhoneNumber(3,6)}-{renderPhoneNumber(6,8)}-{renderPhoneNumber(8,10)}
 </div> 
}
export default PhoneNumber;