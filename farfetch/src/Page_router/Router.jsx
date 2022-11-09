import {Route,Routes} from 'react-router-dom'
import Kids from '../Components/Kids'
import Logo from '../Components/Logo'
import Mens from '../Components/Mens'
import Womens from '../Components/Womens'
function Router(){
    return (
        <Routes>
            <Route path='/' element={<Womens/>}/>
            <Route path='/Mens' element={<Mens/>}/>
            <Route path='/Kids' element={<Kids/>}/>
            <Route path='/Logo' element={<Logo/>}/>
        </Routes>
    )
}
export default Router