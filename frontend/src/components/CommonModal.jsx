import React from 'react'
import { Button, ModalBody } from 'react-bootstrap'
import Modal from 'react-bootstrap/Modal';

function CommonModal({show,size,handleClose,modalHeading,ModalBody,footer,className,bodyClass}) {
  return (
    <Modal size={size} centered className={className} show={show} onHide={handleClose}>
    <Modal.Header closeButton>
      <span></span>
      {modalHeading && <Modal.Title>{modalHeading}</Modal.Title>}
    </Modal.Header>
    <Modal.Body className={bodyClass}>{ModalBody}</Modal.Body>
    {footer && 
    <Modal.Footer>
      <Button variant="secondary" onClick={handleClose ? handleClose :""}>
        Close
      </Button>
      <Button variant="primary" onClick={handleClose ? handleClose :""}>
        Save Changes
      </Button>
    </Modal.Footer> }
   
  </Modal>
  )
}

export default CommonModal