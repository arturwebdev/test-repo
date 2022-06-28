import { useDispatch } from "react-redux"
import { useEffect } from "react"
import { fetchingPosts } from "../../store/features/posts/postsSlice"
import { useSelector } from "react-redux"
import { selectPosts } from "../../store/features/posts/postsSlice"

import HomePost from "../HomePost/HomePost"
import Stories from "../Stories/Stories"

import './Home.css'

const Home = () => {

    const dispatch = useDispatch()
    const posts = useSelector(selectPosts).initialData
    const isFetched = useSelector(selectPosts).isFetched
    
    useEffect(() => {
        if(!isFetched){
            dispatch(fetchingPosts())
        }
    }, [isFetched])


    return (
        <div className="Home">

            <Stories/>

            {
                posts.map(post => <HomePost key={post.id} username={post.username} img={post.img} about={post.about} comments={post.comments} id={post.id}/>)
            }


        </div>
    )
}

export default Home