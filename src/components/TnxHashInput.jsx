import React from 'react'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

function TnxHashInput(props) {
  
  return (
    <>
      <Form onSubmit={props.getData}>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Transaction Hash</Form.Label>
          <Form.Control type="text" placeholder="Enter transaction hash" value={props.txnHash} onChange={e => props.setTxnHash(e.target.value)}/>
        </Form.Group>


        <Button variant="primary" type="submit">
          Submit
        </Button>
      </Form>
    </>
  )
}

export default TnxHashInput