import React from 'react'
import LineText from '../components/LineText'
import CommonModal from '../components/CommonModal'
import FormComp from '../components/FormComp'
import { useState } from 'react';
import Header from '../components/Header';
import Banner from '../assets/images/banner.png';
function Home() {

    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
  return (
   <>
    <Header />
      <LineText onPress={handleShow} />
      <div className="container-fluid mt-5">
        <div className="row">
          <div className="col-12 p-0">
            <img src={Banner} className="img-fluid" alt="Banner" />
          </div>
        </div>
      </div>
      <CommonModal
        bodyClass="bodyModals"
        className="StartModals"
        ModalBody={<FormComp modaleClose={handleClose} />}
        modalHeading="GETTING STARTED"
        handleClose={handleClose}
        show={show}
        size="xl"
      />
   </>
  )
}

export default Home