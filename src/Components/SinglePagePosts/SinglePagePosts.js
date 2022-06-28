import { useSelector } from "react-redux"
import { selectUsers } from "../../store/features/users/usersSlice"

import SinglePagePost from "../SinglePagePost/SinglePagePost"

import './SinglePagePosts.css'

const SinglePagePosts = () => {

  const currentUser = useSelector(selectUsers).currentUser

  return (
    <div className="SinglePagePosts">
      {
        currentUser.posts.map(post => <SinglePagePost key={post.id} url={post.url} id={post.id}/>)
      }    
    </div>
  )
}

export default SinglePagePosts