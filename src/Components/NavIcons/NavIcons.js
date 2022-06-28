import { NavLink } from 'react-router-dom'
import { useSelector } from 'react-redux'
import { selectUsers } from '../../store/features/users/usersSlice'

import { AiOutlineHome, AiOutlineHeart } from 'react-icons/ai'
import { RiMessengerLine } from 'react-icons/ri'
import { FiPlusSquare } from 'react-icons/fi'
import { IoCompassOutline } from 'react-icons/io5'

import IMAGES from '../../Img'

import './NavIcons.css'

const NavIcons = () => {

    const user = useSelector(selectUsers).currentUser
    
    return (
        
        <div className="navIcons">

            <NavLink to="/" className={({ isActive }) => isActive ? "active" : ""}>
                <AiOutlineHome/>
            </NavLink>

            <NavLink to={user ? '/chatbox' : '/login/chatbox'} className={({ isActive }) => isActive ? "active" : ""}>
                <RiMessengerLine/>
            </NavLink>

            <NavLink to={user ? '/add-posts' : '/login/add-posts'} className={({ isActive }) => isActive ? "active" : ""}>
                <FiPlusSquare/>
            </NavLink>


            <IoCompassOutline/>

            <AiOutlineHeart/>

            <NavLink to={user ? '/single-page' : '/login/single-page'} className={({ isActive }) => isActive ? "active" : ""}>
                <img src={IMAGES.profile} alt=""/>
            </NavLink>
        </div>
    )
}


export default NavIcons