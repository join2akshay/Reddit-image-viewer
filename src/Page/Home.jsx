import React, { useContext } from 'react'
import NavBar from '../Components/NavBar/NavBar'
import { DataContext } from '../ContextAPI/ContextAPI'
import Gallery from '../Components/Gallery/Gallery'
import { Container, Row, Col } from 'reactstrap';
import Loader from '../Components/Loader/Loader';
export default function Home() {
    const state=useContext(DataContext)
    
    return (
        <div>
                  <NavBar/>

      <Container>
        <Row>
          <Col xs={12} className='mt-5'>
                  {
          state[0].loading ? <Loader/> : <Gallery/>
      }
          </Col>
          </Row>
          </Container>
         
        
     
          
        </div>
    )
}
