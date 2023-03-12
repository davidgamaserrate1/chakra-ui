import { BrowserRouter, Route, Routes } from "react-router-dom"
import ListClients from "../components/listClients/index.js"
import AddClient from "../components/add-client/index.js"

const RoutesApp = ()=>{
    return(
        <BrowserRouter>
            <Routes>
                <Route path='/login' element={<ListClients/>}> </Route>
                
                <Route path='/' element={<ListClients/>}> </Route>
                <Route path='/clientes' element={<ListClients/>}> </Route>
                <Route path='/clientes/:clientid' element={<ListClients/>}> </Route>
                <Route path='/clientes/editar/:clientid' element={<ListClients/>}> </Route>
                <Route path='/servico/adicionar/:clientid' element={<ListClients/>}> </Route>
                <Route path='/servico/editar/:clientid' element={<ListClients/>}> </Route>
            </Routes>
        </BrowserRouter>
    )
}

export default RoutesApp