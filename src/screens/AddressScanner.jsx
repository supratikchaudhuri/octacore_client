import React, { useEffect, useState } from 'react'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import {getBalance, getPendingBalance, getAllAssets, getNFTAssets} from "../API/accounts";


function AddressScanner() {
  const [address, setAddress] = useState('');
  const [balances, setBalances] = useState([]);
  const [pendingBalance, setPendingBalance] = useState([]);
  const [erc20Assets, setErc20Assets] = useState(null);
  const [erc721Assets, setErc721Assets] = useState(null);
  const [erc1155Assets, setErc1155Assets] = useState(null);


  const getBalanceData = async (e) => {
    e.preventDefault();
    
    const resGetBalance = await getBalance(address);
    setBalances(resGetBalance);

    const resGetPendingBalance = await getPendingBalance(address)
    setPendingBalance(resGetPendingBalance)
   
  }

  const getAssetsData = async (e) => {
    e.preventDefault();

    const {erc20AssetsList, erc721AssetsList, erc1155AssetsList} = await getAllAssets(address);
    setErc20Assets(erc20AssetsList);
    setErc721Assets(erc721AssetsList);
    setErc1155Assets(erc1155AssetsList);
  

  }

  useEffect (() => {

  }, [balances, erc20Assets]);

  return (
    <div className='AddressScanner'>
      <Form >
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label className="">Wallet address</Form.Label>
          <Form.Control type="text" placeholder="Enter wallet address" value={address} onChange={e => setAddress(e.target.value)}/>
        </Form.Group>


        <Button variant="primary" onClick={getBalanceData} className=''>
          Get Balance
        </Button>
        <Button variant="primary" onClick={getAssetsData} className=''>
          Get Assets
        </Button>
      </Form>

      {
        balances?.length > 0 && (
          <>
          <h5>Balance </h5>
          <div class="card">
            <ul class="list-group list-group-flush">
              {
                balances.map(item => <li class="list-group-item">{item}</li>)
              }
            </ul>
          </div>
          </>
      )}
      {
        pendingBalance?.length > 0 && (
          <>
          <h5>Pending Balance </h5>
          <div class="card">
            <ul class="list-group list-group-flush">
              {
                balances.map(item => <li class="list-group-item">{item}</li>)
              }
            </ul>
          </div>
          </>
      )}

      {
        erc20Assets && (
        <>
          <h5>ERC20 Assets</h5>
          <div class="card">
          {
            erc20Assets.map((item) => {
              return (<ul class="list-group list-group-horizontal">
                <li class="list-group-item">Symbol: {item.symbol}</li>
                <li class="list-group-item">Name: {item.name}</li>
                <li class="list-group-item">Balance: {item.balance}</li>
                <li class="list-group-item">Value: {item.value}</li>
              </ul>)
            })
          }
          </div>
        </>
        
      )}

      {/* {
        erc721Assets && (
        <>
          <h5>ERC721 Assets</h5>
          <div class="card">
          {
            erc721Assets.map((item) => {
              return (<ul class="list-group list-group-horizontal">
                <li class="list-group-item">Symbol: {item.symbol}</li>
                <li class="list-group-item">Name: {item.name}</li>
                <li class="list-group-item">Balance: {item.balance}</li>
                <li class="list-group-item">Value: {item.value}</li>
              </ul>)
            })
          }
          </div>
        </>
        
      )}

      {
        erc1155Assets && (
        <>
          <h5>ERC1155 Assets</h5>
          <div class="card">
          {
            erc1155Assets.map((item) => {
              return (<ul class="list-group list-group-horizontal">
                <li class="list-group-item">Symbol: {item.symbol}</li>
                <li class="list-group-item">Name: {item.name}</li>
                <li class="list-group-item">Balance: {item.balance}</li>
                <li class="list-group-item">Value: {item.value}</li>
              </ul>)
            })
          }
          </div>
        </>
        
      )} */}

      
    </div>
  )
}

export default AddressScanner