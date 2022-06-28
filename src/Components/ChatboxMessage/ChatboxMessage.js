import { useSelector } from 'react-redux'
import { selectChat } from '../../store/features/chat/chatSlice'

import './ChatboxMessage.css'

const ChatboxMessage = () => {

    const chatUsers = useSelector(selectChat).chat
    const initialUser = useSelector(selectChat).with

    return (

        <div className="ChatboxMessage">

            {
                initialUser && chatUsers.filter(user => user.id === initialUser.id)[0].messages.map(message => (
                    <div key={message.id} className={`message${message.from}`}>
                        <img src={initialUser.img} alt=""/>
                        <p>{message.text}</p>
                    </div>
                ))
            }

        </div>

    )
}

export default ChatboxMessage