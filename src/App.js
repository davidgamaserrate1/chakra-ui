
import './App.css';
import Header from './components/header/index.js';
import ListClients from './components/listClients/index.js';
import Banner from './components/banner/index.js';
import RoutesApp from './routes/index.js';
import AddClient from './components/add-client/index.js';

import { ChakraProvider } from '@chakra-ui/react';

function App() {
   return (
      <ChakraProvider className='chakraProv'>
         <RoutesApp />
      </ChakraProvider>
   );
}

export default App;
