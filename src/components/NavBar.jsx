import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

const NavBar = () => {
  return (
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
  );
}

export default NavBar;