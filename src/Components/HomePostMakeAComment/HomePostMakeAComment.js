import { useDispatch } from 'react-redux';
import { useCallback, useRef } from 'react'
import { addComments } from '../../store/features/posts/postsSlice';
import { commentMode } from '../../HOC/commentMode';

import { BsEmojiSmile } from 'react-icons/bs'

import './HomePostMakeAComment.css'

const HomePostMakeAComment = commentMode(({ id, inCommentMode, isInCommentMode, outOfCommentMode }) => {

    const formRef = useRef(null)
    const dispatch = useDispatch()
    
    const handleSubmit = useCallback(e => {
        e.preventDefault()

        if(formRef.current[0].value.trim() !== '') {
            dispatch(addComments({id: id, comment: formRef.current[0].value}))
        }

        formRef.current[0].value = ''
        outOfCommentMode()
        
    }, [])

    return (
        <div className="PostMakeAComment">
            <BsEmojiSmile/>
            <form onSubmit={handleSubmit} ref={formRef}>
                <input placeholder="Add a comment..." onChange={() => inCommentMode()}/>
                <button className={isInCommentMode ? "active" : ''}>Share</button>
            </form>
        </div>
    )
})

export default HomePostMakeAComment