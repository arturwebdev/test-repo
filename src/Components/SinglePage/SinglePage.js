import SinglePageInfo from "../SinglePageInfo/SinglePageInfo.js"
import SinglePagePosts from "../SinglePagePosts/SinglePagePosts"

import './SinglePage.css'

const SinglePage = () => {

    return (
        <section className="SinglePage">
            <SinglePageInfo/>
            <SinglePagePosts/>
        </section>
    )
}

export default SinglePage