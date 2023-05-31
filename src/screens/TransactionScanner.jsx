import React, { useEffect, useState } from 'react'
import Dropdown from 'react-bootstrap/Dropdown';
import TnxHashInput from '../components/TnxHashInput';
import BlockDataInput from '../components/BlockDataInput';


import { getTxnData, getTxnDataByBlockHashAndIdx, getTxnDataByBlockNoAndIdx } from '../API/transactions';

function TransactionScanner() {

  const [reqType, setReqType] = useState('Transaction Hash')
  const [txnHash, setTxnHash] = useState('');
  const [blockHash, setBlockHash] = useState('')
  const [blockIdx, setBlockIdx] = useState(null);
  const [txnData, setTxnData] = useState(null);
  

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

    if(parseInt(blockHash) === 'undefined') { //its a block hash
      txnDataObj = await getTxnDataByBlockHashAndIdx(blockHash, blockIdx);
    } 
    else {  // its a block number
      txnDataObj = await getTxnDataByBlockNoAndIdx(blockHash, blockIdx);
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
        <TnxHashInput getData={getDataFromTxn} txnHash={txnHash} setTxnHash={setTxnHash}/>
        :
        <BlockDataInput 
          getData={getDataFromBlock} 
          blockHash={blockHash}
          setBlockHash={setBlockHash}
          blockIdx={blockIdx} 
          setBlockIdx={setBlockIdx}
          
        />
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