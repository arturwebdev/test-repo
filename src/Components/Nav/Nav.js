import NavIcons from '../NavIcons/NavIcons'
import NavLogo from '../NavLogo/NavLogo'
import NavInput from '../NavInput/NavInput'

import './Nav.css'

const Nav = () => {

    return (
        <nav>
            <div className="container">
                
                <div className='navImgInput'>

                    <NavLogo/>
                    <NavInput/>
                
                </div>

                <NavIcons/>

            </div>
        </nav>
    )
}

export default Nav