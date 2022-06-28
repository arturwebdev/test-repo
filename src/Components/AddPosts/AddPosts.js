import { useRef } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { addPostsInGeneralPage } from '../../store/features/posts/postsSlice'
import { addPosts, selectUsers } from '../../store/features/users/usersSlice'

import './AddPosts.css'

const AddPosts = () => {

    const addFormRef = useRef(null)
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const currentUser = useSelector(selectUsers).currentUser


    return (
        <section className="AddPosts">
            <form onSubmit={e => {
                e.preventDefault()

                if(addFormRef.current[0].value.trim() !== '') {
                    let id = new Date().getTime().toString()
                    dispatch(addPosts({id, img: addFormRef.current[0].value}))
                    dispatch(addPostsInGeneralPage(
                        {
                            id,
                            username: currentUser.username,
                            url: addFormRef.current[0].value,
                            description: addFormRef.current[1].value
                        }
                    ))
                    navigate('/single-page')
                }

                addFormRef.current[0].value = ''
                addFormRef.current[1].value = ''

            }} className="AddPostsForm" ref={addFormRef}>
                <input className="AddPostsFormContent" type="text" placeholder="Photo URL"/>
                <textarea className="AddPostsFormDescription" autoFocus placeholder="Post description"/>
                <button className="AddPostsButton">Add</button>
            </form>
        </section>
    )
}

export default AddPosts