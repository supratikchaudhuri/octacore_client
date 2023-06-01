import React, { useState } from 'react'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Alert from 'react-bootstrap/Alert';

import {resolveEns, reverseResolveEns} from "../API/ens";

function ENS() {

  const [resolvedDomain, setResolvedDomain] = useState(null);
  const [resolvedAddress, setResolvedAddress] = useState(null);

  const resolveENSSubmit = async (e) => {
    e.preventDefault();
    
    const domain = document.getElementById('domainInput').value;
    const res = await resolveEns(domain);
    console.log(res);
    setResolvedDomain({"domain": domain, "address": res.address});
  }

  const reverseResolveENSSubmit = async (e) => {
    e.preventDefault();
    
    const address = document.getElementById('addressInput').value;
    const res = await reverseResolveEns(address);
    setResolvedAddress({"domain": res.domain, "address": address});
  }

  return (
    <div className='ENS-div'>
      <Form onSubmit={resolveENSSubmit}>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>ENS Resolve</Form.Label>
          <Form.Control type="text" id="domainInput" placeholder="Enter domain" />
        </Form.Group>

        <Button variant="primary" type="submit">
          Search
        </Button>
      </Form>

      {resolvedDomain && 
        <Alert variant='info'>
          {`Address for ${resolvedDomain.domain} is ${resolvedDomain.address}`}
        </Alert>}


      <Form onSubmit={reverseResolveENSSubmit}>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Reverse Resolve ENS</Form.Label>
          <Form.Control type="text" id="addressInput" placeholder="Enter address" />
        </Form.Group>


        <Button variant="primary" type="submit">
          Search
        </Button>
      </Form>

      {resolvedAddress && 
        <Alert variant='info'>
          {`Domain for ${resolvedAddress.address} is ${resolvedAddress.domain}`}
        </Alert>}

    </div>
  )
}

export default ENS