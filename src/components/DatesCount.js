import React from 'react'
import {Row,Col} from "react-bootstrap";
const DatesCount = ({PersonDataProp}) => {
  return (
    <Row className="justify-content-center">
            <Col sm="8">
                <h5>      لديك {PersonDataProp.length} مواعيد اليوم</h5>
            </Col>
    </Row>
  )
}

export default DatesCount