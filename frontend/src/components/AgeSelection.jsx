import React from 'react';
import { Button, ButtonGroup } from 'react-bootstrap';

const AgeSelection = () => {
  return (
    <div className="text-center my-4">
      <h3>What’s your age?</h3>
      {/* <ButtonGroup> */}
        <Button variant="primary">7-10</Button>
        <Button variant="primary">11-15</Button>
        <Button variant="primary">Above 16</Button>
      {/* </ButtonGroup> */}
    </div>
  );
};

export default AgeSelection;
