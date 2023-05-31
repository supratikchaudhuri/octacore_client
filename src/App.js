import {BrowserRouter, Routes, Route} from "react-router-dom"

import AddressScanner from "./screens/AddressScanner";
import TransactionScanner from "./screens/TransactionScanner";
import NavBar from "./components/NavBar";

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

      </BrowserRouter>

      
    </div>
  );
}

export default App;
