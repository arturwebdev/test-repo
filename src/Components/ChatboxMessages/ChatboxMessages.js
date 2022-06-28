import ChatboxMessagesHeader from "../ChatboxMessagesHeader/ChatboxMessagesHeader"
import ChatboxMessage from "../ChatboxMessage/ChatboxMessage"
import ChatboxMessageForm from "../ChatboxMessageForm/ChatboxMessageForm"

import './ChatboxMessages.css'

const ChatboxMessages = () => {

    return (
        <div className="ChatboxMessages">
            <ChatboxMessagesHeader/>
            <ChatboxMessage/>
            <ChatboxMessageForm/>
        </div>
    )
}

export default ChatboxMessages