import { BrowserRouter, Route, Routes } from "react-router-dom"
import ListClients from "../components/listClients/index.js"
import EditClient from "../components/edit-client/index.js"
import ClientDetail from "../components/client-detail/index.js"
import Login from "../components/login/index.js"



const RoutesApp = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path='/login' element={<Login />}> </Route>

                <Route path='/' element={<ListClients />}> </Route>
                <Route path='/clientes' element={<ListClients />}> </Route>

                <Route path='/clientes/:clientid' element={<ClientDetail />}> </Route>
                <Route path='/clientes/editar/:clientid' element={<EditClient />}> </Route>
                <Route path='/servico/adicionar/:clientid' element={<ListClients />}> </Route>
                <Route path='/servico/editar/:clientid' element={<ListClients />}> </Route>
            </Routes>
        </BrowserRouter>
    )
}

export default RoutesApp