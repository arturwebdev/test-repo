import { useSelector } from "react-redux"
import { selectUsers } from "../../store/features/users/usersSlice"

import IMAGES from "../../Img"

import './SinglePageInfo.css'

const SinglePageInfo = () => {

    const currentUser = useSelector(selectUsers).currentUser

    return (
        <div className="SinglePageInfo">
            <div className="userProfile">
                <img src={IMAGES.profile} alt=""/>
            </div>
            <div className="userInfo">
                <span className="SinglePageUsername">{currentUser.username}</span>
                <div className="aboutFollows">
                    <p><span>{currentUser.posts.length} </span>posts</p>
                    <p><span>435 </span>followers</p>
                    <p><span>342 </span>following</p>
                </div>
                <p><span>{currentUser.name}</span></p>
            </div>
        </div>
    )
}

export default SinglePageInfo