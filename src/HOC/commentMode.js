import { useCallback, useState } from "react"

export const commentMode = Component => {
    return (props) => {
        const [isInCommentMode, setIsInCommentMode] = useState(false)

        const inCommentMode = useCallback(() => {
            setIsInCommentMode(true)
        }, [])

        const outOfCommentMode = useCallback (() => {
            setIsInCommentMode(false)
        }, [])

        return (
            <Component
                isInCommentMode={isInCommentMode}
                inCommentMode={inCommentMode}
                outOfCommentMode={outOfCommentMode}
                {...props}
            />
        )
    }
}