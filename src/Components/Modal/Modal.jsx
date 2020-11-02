/* eslint react/no-multi-comp: 0, react/prop-types: 0 */

import React, { useState, useEffect, useContext } from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter, Row, Col } from 'reactstrap';
import { DataContext } from '../../ContextAPI/ContextAPI';

const ModalView = (props) => {
  const {
   url,
    modal,
    setModal
  } = props;
  console.log(url)

  const [state,dispatch]=useContext(DataContext)



  

  const toggle = () => setModal(false);

  return (
    <div>
     
      <Modal isOpen={modal} toggle={toggle} >
        <ModalHeader toggle={toggle}> {state.modalViewData[0].data.author}'s Image</ModalHeader>
        <ModalBody>
            <img src={url} alt={`${state.modalViewData[0].data.author}'s Image`}/>
            <Row className='my-2'>  
            <Col>
                    <h4>
                        Title
                    </h4>
                </Col>
                <Col>
                    <h4>
                        {state.modalViewData[0].data.title}
                    </h4>
                </Col>
            </Row>
            <Row className='my-2'>
            <Col>
                    <h4>
                        Author
                    </h4>
                </Col>
                <Col>
                    <h4>
                        {state.modalViewData[0].data.author}
                    </h4>
                </Col>
            </Row>
            <Row className='my-2'>
            <Col>
                    <h4>
                       Content Categoires
                    </h4>
                </Col>
                <Col>
                    <h4>
                        {state.modalViewData[0].data.content_categories}
                    </h4>
                </Col>
            </Row>
            <Row className='my-2'>
            <Col>
                    <h4>
                        Ups
                    </h4>
                </Col>
                <Col>
                    <h4>
                        {state.modalViewData[0].data.ups}
                    </h4>
                </Col>
            </Row>
         </ModalBody>
        <ModalFooter>
        
          <Button color="secondary" onClick={toggle}>Close</Button>
        </ModalFooter>
      </Modal>
    </div>
  );
}

export default ModalView;