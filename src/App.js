import {BrowserRouter, Routes, Route} from "react-router-dom"

import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

import AddressScanner from "./screens/AddressScanner";
import TransactionScanner from "./screens/TransactionScanner";
import ENS from "./screens/ENS";
import BlockScanner from "./screens/BlockScanner";

function App() {
  return (
    <div className="App">
      <>
        <Navbar bg="primary" variant="dark" className='mb-3'>
          <Container>
            <Navbar.Brand href="#home">Octacore Scanner</Navbar.Brand>
            <Nav className="me-auto">
              <Nav.Link href="accounts">Accounts</Nav.Link>
              <Nav.Link href="transactions">Transactions</Nav.Link>
              <Nav.Link href="block">Block</Nav.Link>
              <Nav.Link href="nft">NFT</Nav.Link>
              <Nav.Link href="smart-contracts">Smart Contracts</Nav.Link>
              <Nav.Link href="ens">ENS</Nav.Link>
            </Nav>
          </Container>
        </Navbar>
      </>

      <BrowserRouter>

        <Routes>
          <Route exact path="/accounts" element={<AddressScanner/>}/>
        </Routes>

        <Routes>
          <Route exact path="/transactions" element={<TransactionScanner/>}/>
        </Routes>

        <Routes>
          <Route exact path="/block" element={<BlockScanner/>}/>
        </Routes>

        <Routes>
          <Route exact path="/ens" element={<ENS/>}/>
        </Routes>

      </BrowserRouter>

      
    </div>
  );
}

export default App;
