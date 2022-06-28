import { memo } from "react"

import HomePostHeader from "../HomePostHeader/HomePostHeader"
import HomePostContent from "../HomePostContent/HomePostContent"
import HomePostIconsAndAbout from "../HomePostIconsAndAbout/HomePostIconsAndAbout"
import HomePostComments from "../HomePostComments/HomePostComments"
import HomePostMakeAComment from "../HomePostMakeAComment/HomePostMakeAComment"

import './HomePost.css'

const HomePost = ({ username, img, about, comments, id }) => {

    return (
        <div className="Post">
            <HomePostHeader username={username}/>
            <HomePostContent img={img}/>
            <HomePostIconsAndAbout username={username} about={about}/>
            <HomePostComments comments={comments} id={id}/>
            <HomePostMakeAComment id={id}/>
        </div>
    )
}

export default memo(HomePost)