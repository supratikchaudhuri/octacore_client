import {BrowserRouter, Routes, Route} from "react-router-dom"

import AddressScanner from "./screens/AddressScanner";
import TransactionScanner from "./screens/TransactionScanner";
import NavBar from "./components/NavBar";
import ENS from "./screens/ENS";
import BlockScanner from "./screens/BlockScanner";

function App() {
  return (
    <div className="App">
      <NavBar/>

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
