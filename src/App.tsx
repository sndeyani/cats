import React, {lazy} from 'react'
import {Route, Routes} from "react-router-dom";
import {Container} from "./styles";

const Images = lazy(() => import("./components/Images"));
const SideMenu = lazy(() => import("./components/SideMenu"));

const App: React.FC = () => {
    return (
        <Container>
            <SideMenu/>
            <Routes>
                <Route path='/' element={<Images/>}/>
                <Route path='/category/:id' element={<Images/>}/>
            </Routes>
        </Container>
    )
}

export default App;
