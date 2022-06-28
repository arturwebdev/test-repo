import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faEllipsis } from "@fortawesome/free-solid-svg-icons"

import IMAGES from "../../Img"

import './HomePostHeader.css'

const HomePostHeader = ({ username }) => {

    return (
        <div className="PostHeader">
            <div className="PostHeaderElements">
                <img src={IMAGES.profile} alt="" width={40} height={40}/>
                <span>{username}</span>     
            </div>
            <FontAwesomeIcon icon={faEllipsis}/>
        </div>
    )
}

export default HomePostHeader