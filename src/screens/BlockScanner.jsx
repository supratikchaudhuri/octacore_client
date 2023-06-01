import React, { useState } from 'react'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

import { getAllTxns, getBlockData, getBlockHeader } from '../API/block';

function BlockScanner() {
  const [block, setBlock] = useState('');
  const [reqtype, setReqType] = useState('');
  const [response, setResponse] = useState(null);

  const getTxns = async(e) => {
    e.preventDefault();
  
    const res = await getAllTxns(block)
    setResponse(res);
    setReqType('Transactions (logging only the first 10 txn hash)')
  }

  const getData = async(e) => {
    e.preventDefault();

    const res = await getBlockData(block)
    setResponse(res);
    setReqType('Block Data')
  }

  const getHeader = async(e) => {
    e.preventDefault();

    const res = await getBlockHeader(block);
    setResponse(res);
    setReqType('Block Header')
  }

  return (
    <div className='block-scanner'>
      <Form >
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Block hash/number</Form.Label>
          <Form.Control type="text" id="domainInput" placeholder="Enter block hash or number" 
            value={block} onChange={e => setBlock(e.target.value)}
          />
        </Form.Group>

        <Button variant="primary" type="submit" onClick={getTxns}>
          Get Transactions
        </Button>
        <Button variant="primary" type="submit" onClick={getData}>
          get Block Data
        </Button>
        <Button variant="primary" type="submit" onClick={getHeader}>
          Get Block Header
        </Button>
      </Form>

      {
        response && (
        <>
        <h5>{reqtype}</h5>
        <div class="card">
          <ul class="list-group list-group-flush">
            {
              Object.keys(response).map(item => 
                typeof response[item] !== 'object' && <li class="list-group-item">{`${item}: ${response[item]}`}</li>
              )
            }
          </ul>
        </div>
        </>
      )}
    </div>
  )
}

export default BlockScanner