
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './components/Header';
import CommonModal from './components/CommonModal';
import LineText from './components/LineText';
import Banner from "./assets/images/banner.png";
import { useState } from 'react';
import AgeSelection from './components/AgeSelection';
import FormComp from './components/FormComp';


function App() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <div className="root">
       <Header/>
       <LineText onPress={handleShow} />
      <div className="container-fluid mt-5">
        <div className="row">
            <div className="col-12 p-0">
            <img src={Banner} className="img-fluid " alt="" />
            </div>
        </div>
      </div>
       <CommonModal
       bodyClass={"bodyModals"}
       className={"StartModals"}
       ModalBody={<FormComp/>}
       modalHeading={"GETTING STARTED"}
       handleClose={handleClose}
       show={show}
       size={"md"}
       />
  </div>
  );
}

export default App;
