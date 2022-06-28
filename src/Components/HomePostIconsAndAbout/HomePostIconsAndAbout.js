import { AiOutlineHeart } from 'react-icons/ai'
import { TbMessageCircle2 } from 'react-icons/tb'
import { IoPaperPlaneOutline } from 'react-icons/io5'
import { BiBookmark } from 'react-icons/bi'

import './HomePostIconsAndAbout.css'

const HomePostIconsAndAbout = ({ username, about }) => {
    
    return (
        <div className="HomePostIconsAndAbout">

            <div className="HomePostLikes">
                <div className="HomePostLikesIcons">
                    <AiOutlineHeart/>
                    <TbMessageCircle2/>
                    <IoPaperPlaneOutline/>
                </div>
                <BiBookmark/>
            </div>
            <div className="HomePostAbout">
                <p><span>{username} </span>{about}</p>
            </div>

        </div>
    )
}

export default HomePostIconsAndAbout