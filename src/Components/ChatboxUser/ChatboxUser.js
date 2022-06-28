import { memo } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { changeWith, selectChat } from '../../store/features/chat/chatSlice'

import './ChatboxUser.css'

const ChatboxUser = ({ username, img, id }) => {

    const dispatch = useDispatch()
    const initialUser = useSelector(selectChat).with

    return (
        <div className={initialUser.id === id ? "ClickedUser ChatboxUser" : "ChatboxUser"} onClick={() => dispatch(changeWith({id: id}))}>
            <div className="ChatboxUserImg">
                <img src={img} alt=""/>
            </div>
 
            <span>{username}</span>

        </div>
    )
}

export default memo(ChatboxUser)