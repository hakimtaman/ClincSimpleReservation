import React, { useEffect, useState } from 'react';
import './index.css';
import Person from './data';
import DatesCount from './components/DatesCount';
import DatesList from './components/DatesList';
import DatesAction from './components/DatesAction';
import Title from './components/Title';
import {Container} from "react-bootstrap";


function App() {
      const [PersonData,SetPersonData] = useState(Person);
      const OnDelete = () => {
        SetPersonData([]);
      }
      const OnAdd = () => {
        SetPersonData(Person);
      }
    useEffect(()=>{
      SetPersonData([]);

    },[])

  return (
    <div className="App">
    
        <Container className="py-5 ">
          <Title/>
          <DatesCount PersonDataProp={PersonData}/>
          <DatesList PersonDataProp={PersonData}/>
          <DatesAction OnAdd={OnAdd} OnDelete={OnDelete}/>
        </Container>
    </div>
  );
}

export default App;
