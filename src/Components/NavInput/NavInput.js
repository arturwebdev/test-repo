import { useDispatch } from 'react-redux'
import { searchUserPosts } from '../../store/features/posts/postsSlice'

import './NavInput.css'

const NavInput = () => {
    
    const dispatch = useDispatch()

    return (
        <input type="search" onChange={e =>  dispatch(searchUserPosts({text: e.target.value}))} placeholder="Search"/>
    )
}

export default NavInput