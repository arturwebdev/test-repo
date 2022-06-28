import { Outlet } from 'react-router-dom'

import Nav from '../../Components/Nav/Nav'

import './Wrapper.css'

const Wrapper = () => {
    return (
        <>
            <Nav/>
            <div className="WrapperCenter">
                <Outlet/>
            </div>
        </>
    )
}

export default Wrapper