 
import './App.css';
import Header from './components/header/';
import ListClients from './components/listClients/';
import Banner from './components/banner';

function App() {
  return (
     <div>
        <Header/>
         <Banner desc ='Cadastro De Clientes'/>
          
        <ListClients/>
     </div>
  );
}

export default App;
