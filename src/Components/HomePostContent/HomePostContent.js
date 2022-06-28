import './HomePostContent.css'

const HomePostContent = ({ img }) => {
    return (
        <div className="PostContent">
            <img src={img} alt=""/>
        </div>
    )
}

export default HomePostContent