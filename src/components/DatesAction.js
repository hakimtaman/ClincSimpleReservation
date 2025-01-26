import React from 'react'
import {Row,Col,Button} from "react-bootstrap";
const DatesAction = ({OnDelete, OnAdd}) => {
  return (
    
  <Row className='justify-content-center mt-3'>
     <Col sm="8" className='d-flex justify-content-between'>
            <Button onClick = {OnAdd} className='btn btn-btn-outline-primary p-2'> عرض الحجوزات</Button>
            <Button onClick = {OnDelete} className='btn btn-danger p-2'> مسح الكل</Button>
     </Col>
 </Row>
  )
}

export default DatesAction;