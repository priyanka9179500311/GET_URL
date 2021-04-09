import logo from './logo.svg';
import './App.css';
import { BrowserRouter,Route } from 'react-router-dom';
import Home from './Home';
import Edit from './Edit';
import Delete from './Delete';

function App() {
  return (
    <BrowserRouter>
      <Route path="/" exact component={ Home }></Route>
      <Route path="/edit/:editid" component={ Edit }></Route>
      <Route path="/delete/:deleteid" component={ Delete }></Route>
    </BrowserRouter>
  );
}

export default App;
