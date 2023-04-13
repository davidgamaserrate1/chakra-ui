import { BrowserRouter, Route, Routes } from "react-router-dom"
import ListClients from "../components/listClients/index.js"
import EditClient from "../components/edit-client/index.js"
import ClientDetail from "../components/client-detail/index.js"
import Login from "../components/login/index.js"


const user_token = localStorage.getItem('token')
const RoutesApp = () => {
    return (
        <>
            {!user_token ? 
                <BrowserRouter> 
                <Routes>
                <Route path='*' element={<Login />}> </Route>     
                <Route path='/login' element={<Login />}> </Route>     
                </Routes>
        
                </BrowserRouter>
            :(<BrowserRouter>
                <Routes>
                    <Route path='/' element={<ListClients />}> </Route>                    
                    <Route path='/clientes' element={<ListClients />}> </Route>
                    <Route path='/clientes/:clientid' element={<ClientDetail />}> </Route>
                    <Route path='/clientes/editar/:clientid' element={<EditClient />}> </Route>
                    <Route path='/servico/adicionar/:clientid' element={<ListClients />}> </Route>
                    <Route path='/servico/editar/:clientid' element={<ListClients />}> </Route>
                </Routes>
            </BrowserRouter>)
            }
        </>
    )
}

export default RoutesApp