import { Alert } from 'react-bootstrap';
import React, { Component } from 'react'

 const NotFound = (props)=>  {
 
    return (
       <div className='w-80 d-flex'>
         <Alert  variant="danger">
          {props.message}
        </Alert>
        <button className='btn btn-danger ms-1'> Close</button>
       </div>
    )

}

export default NotFound;
