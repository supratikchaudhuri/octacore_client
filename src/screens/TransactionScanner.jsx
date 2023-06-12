import React, { useEffect, useState } from 'react'
import Dropdown from 'react-bootstrap/Dropdown';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';


import { getTxnData, getTxnDataByBlockHashAndIdx, getTxnDataByBlockNoAndIdx } from '../API/transactions';

function TransactionScanner() {

  const [reqType, setReqType] = useState('Transaction Hash')
  const [txnHash, setTxnHash] = useState('');
  const [blockHash, setBlockHash] = useState('')
  const [blockIdx, setBlockIdx] = useState(null);
  const [txnData, setTxnData] = useState(null);

  String.prototype.isNumber = function(){return /^\d+$/.test(this);}

  useEffect (() => {

  }, [txnData])

  const getDataFromTxn = async (e) => {
    e.preventDefault();

    const txnDataObj = await getTxnData(txnHash);
    setTxnData(txnDataObj)
  }

  const getDataFromBlock = async (e) => {
    e.preventDefault();
    let txnDataObj;

    if(blockHash.isNumber()) { //its a block number
      txnDataObj = await getTxnDataByBlockNoAndIdx(parseInt(blockHash), blockIdx);
    } 
    else {  // its a block hash
      txnDataObj = await getTxnDataByBlockHashAndIdx(blockHash, blockIdx);
    }
    setTxnData(txnDataObj);
  }

  return (
    <div className='TransactionScanner'>
      <Dropdown className='mb-3'>
        <Dropdown.Toggle variant="success" id="dropdown-basic">
          {reqType}
        </Dropdown.Toggle>
        <Dropdown.Menu>
          <Dropdown.Item onClick={e => setReqType('Transaction Hash')}>Transaction Hash</Dropdown.Item>
          <Dropdown.Item onClick={e => setReqType('Block Data')}>Block Data</Dropdown.Item>
        </Dropdown.Menu>
      </Dropdown>


      {
        reqType === 'Transaction Hash' 
        ?
        <>
          <Form onSubmit={getDataFromTxn}>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Transaction Hash</Form.Label>
              <Form.Control type="text" placeholder="Enter transaction hash" value={txnHash} onChange={e => setTxnHash(e.target.value)}/>
            </Form.Group>


            <Button variant="primary" type="submit">
              Submit
            </Button>
          </Form>
        </>
        :
        <>
          <Form onSubmit={getDataFromBlock}>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Block Hash/Number</Form.Label>
              <Form.Control type="text" placeholder="Enter transaction hash" value={blockHash} onChange={e => setBlockHash(e.target.value)}/>
              <Form.Label>Block Index (Optional)</Form.Label>
              <Form.Control type="text" placeholder="Enter block Index" value={blockIdx} onChange={e => setBlockIdx(e.target.value)}/>
            </Form.Group>


            <Button variant="primary" type="submit">
              Submit
            </Button>
          </Form>
        </>
      }


      {
        txnData && (
        <>
        <h5>Transaction Data</h5>
        <div class="card">
          <ul class="list-group list-group-flush">
            {
              Object.keys(txnData).map(item => 
                typeof txnData[item] !== 'object' && <li class="list-group-item">{`${item}: ${txnData[item]}`}</li>
              )
            }
          </ul>
        </div>
        </>
      )}

    </div>
  )
}

export default TransactionScanner