import { useCallback, useRef } from 'react'
import { useDispatch } from 'react-redux'
import { addMessage } from '../../store/features/chat/chatSlice'


const ChatboxMessageForm = () => {

    const chatFormRef = useRef(null)
    const dispatch = useDispatch()

    const handlerSubmit = useCallback(e => {
        e.preventDefault()
        dispatch(addMessage({text: chatFormRef.current[0].value}))
        chatFormRef.current[0].value = ''
    })

    return (
        <form className="ChatboxMessageForm" onSubmit={e => handlerSubmit(e)} ref={chatFormRef}>
            <input type="text" placeholder="Type a message..."/>
            <button>send</button>
        </form>
    )
}

export default ChatboxMessageForm