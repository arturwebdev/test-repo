import { useSelector } from "react-redux"
import { selectUsers } from "../../store/features/users/usersSlice"

import './ChatboxUsersHeader.css'

const ChatboxUsersHeader = () => {

    const currentUser = useSelector(selectUsers).currentUser
    
    return (
        <div className="ChatboxUsersHeader">
            <span>{currentUser.username}</span>
        </div>
    )
}

export default ChatboxUsersHeader