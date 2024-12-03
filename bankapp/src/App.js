import './App.css';
import {Routes,Route} from 'react-router-dom';
import Login from './Practice/Assignments/BankAPP/Login';
import Register from './Practice/Assignments/BankAPP/Register';
import Home from './Practice/Assignments/BankAPP/Home';
import Transfer from './Practice/Assignments/BankAPP/Transfer';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<Login/>}/>
        <Route path='/Register' element={<Register/>}/>
        <Route path='/Home' element={<Home/>}/>
        <Route path='/Transfer' element={<Transfer/>}/>
      </Routes>
    </div>
  
  );
}

export default App;