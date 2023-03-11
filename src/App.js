 
import './App.css';
import Header from './components/header/';
import ListClients from './components/listClients/';
import Banner from './components/banner';

function App() {
  return (
     <div>
        <Header/>
        <Banner/>
        <ListClients/>
     </div>
  );
}

export default App;
