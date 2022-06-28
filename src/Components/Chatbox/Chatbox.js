import ChatboxUsers from '../ChatboxUsers/ChatboxUsers'
import ChatboxMessages from '../ChatboxMessages/ChatboxMessages'

import './Chatbox.css'

const Chatbox = () => {
    return (
        <section className="Chatbox">
            <ChatboxUsers/>
            <ChatboxMessages/>
        </section>
    )
}

export default Chatbox