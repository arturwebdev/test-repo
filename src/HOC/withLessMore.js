import { useCallback, useState } from "react"

export const withLessMore = Component => {
    return (props) => {
        const [isShow, setIsShow] = useState(false)
    
        const isShowHandler = useCallback(() => {
            setIsShow(!isShow)
        }, [isShow])
        
        return (
            <Component
                isShow={isShow}
                isShowHandler={isShowHandler}
                {...props}
            />
        )
    }
}