import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faCircleChevronLeft } from "@fortawesome/free-solid-svg-icons"
import { faCircleChevronRight } from "@fortawesome/free-solid-svg-icons"

import IMAGES from "../../Img"

import './Stories.css'

const Stories = () => {

    return (
        <section>
            <div className="container">
                <div className="Stories">
                    <div className="Story">
                        <img alt="" width={64} height={64} src={IMAGES.profile_1}/>
                        <span>arr_hak</span>
                    </div>
                    <div className="Story">
                        <img alt="" width={64} height={64} src={IMAGES.profile_2}/>
                        <span>melyannn</span>
                    </div>
                    <div className="Story">
                        <img alt="" width={64} height={64} src={IMAGES.profile_3}/>
                        <span>elvinamak...</span>
                    </div>
                    <div className="Story">
                        <img alt="" width={64} height={64} src={IMAGES.profile_4}/>
                        <span>harut_01</span>
                    </div>
                    <div className="Story">
                        <img alt="" width={64} height={64} src={IMAGES.profile_5}/>
                        <span>kara.mak</span>
                    </div> 
                    <div className="Story">
                        <img alt="" width={64} height={64} src={IMAGES.profile_6}/>
                        <span>melisala...</span>
                    </div>
                    <div className="Story">
                        <img alt="" width={64} height={64} src={IMAGES.profile_7}/>
                        <span></span>
                    </div>
                    <div className="Story">
                        <img alt="" width={64} height={64} src={IMAGES.profile_8}/>
                        <span>hrantavet...</span>
                    </div>
                    <div className="Story">
                        <img alt="" width={64} height={64} src={IMAGES.profile_9}/>
                        <span>3.33</span>
                    </div>
                    <div className="Story">
                        <img alt="" width={64} height={64} src={IMAGES.profile_10}/>
                        <span>grr.r</span>
                    </div>
                    <FontAwesomeIcon className="slidePrev" icon={faCircleChevronLeft} />
                    <FontAwesomeIcon className="slideNext" icon={faCircleChevronRight}/>
                </div> 
            </div>
        </section>
    )
}

export default Stories