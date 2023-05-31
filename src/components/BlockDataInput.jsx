import React from 'react'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

function BlockDataInput(props) {
  return (
    <>
      <Form onSubmit={props.getData}>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Block Hash/Number</Form.Label>
          <Form.Control type="text" placeholder="Enter transaction hash" value={props.blockHash} onChange={e => props.setBlockHash(e.target.value)}/>
          <Form.Label>Block Index (Optional)</Form.Label>
          <Form.Control type="text" placeholder="Enter block Index" value={props.blockIdx} onChange={e => props.setBlockIdx(e.target.value)}/>
        </Form.Group>


        <Button variant="primary" type="submit">
          Submit
        </Button>
      </Form>
    </>
  )
}

export default BlockDataInput