import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { fetchingChat, selectChat } from "../../store/features/chat/chatSlice"

import ChatboxUser from "../ChatboxUser/ChatboxUser"
import ChatboxUsersHeader from "../ChatboxUsersHeader/ChatboxUsersHeader"


import './ChatboxUsers.css'

const ChatboxUsers = () => {

    const dispatch = useDispatch()
    const isFetched = useSelector(selectChat).isFetched
    
    useEffect(() => {
        if(!isFetched) {
            dispatch(fetchingChat())
        }
    }, [isFetched])

    const chatUsers = useSelector(selectChat).chat

    return (

        <div className="ChatboxUsers">
            <ChatboxUsersHeader/>
            <div className="ChatboxUsersWrapper">
                {
                    chatUsers.map(user => <ChatboxUser key={user.id} username={user.username} img={user.img} id={user.id}/>)
                }
            </div>
        </div>
   
    )
}

export default ChatboxUsers