import { withLessMore } from '../../HOC/withLessMore'

import './HomePostComments.css'

const HomePostComments = withLessMore(({ comments, isShow, isShowHandler }) => {
    return (
        <>
        {!!comments.length &&<div className="HomePostComments">
            {
                isShow ? (
                    <div>
                        {
                            comments.map(comment => <p key={comment.id}><span>{comment.username} </span>{comment.comment}</p>)
                        }
                        <span className="viewLessComments" onClick={() => isShowHandler()}>veiw less</span>
                    </div>
                ): <span className="viewAllComments" onClick={() => isShowHandler()}>veiw all comments...</span> 
            }
        </div>}
        </>
    )
})

export default HomePostComments