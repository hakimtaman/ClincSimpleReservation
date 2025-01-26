import React from 'react'
import {Row,Col} from "react-bootstrap";
const DatesList = ({PersonDataProp}) => {
  return (
   
    <Row className='justify-content-center'>
    <Col sm="8" className='reqtangle'>
         {PersonDataProp.length ? ( PersonDataProp.map((item)=>{
           return (
           <div key={item.id} className='d-flex bg-light-subtle p-3 align-items-center border-bottom border-1'>
               <img className='img-avatar' alt='avatar_pic' src={item.img}/>
                 <div className='px-3 '>
                     <p className='fs-5 m-0 pb-1'> {item.name}</p>
                     <p className='fs-6 m-0'>{item.Date}</p>
                 </div>
            </div>

           )

         })) :<h4 className='py-5 text-center list-h4 '>لا يوجد حجوزات اضغط عرض لتحديث البيانات</h4>}
       
    </Col>
 </Row>
  )
}

export default DatesList