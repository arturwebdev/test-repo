import { Formik } from 'formik'
import * as yup from 'yup'

import { useNavigate, useParams } from 'react-router-dom'
import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { fetchingUsers, logIn, selectUsers } from "../../store/features/users/usersSlice"

import IMAGES from "../../Img"

import './LogIn.css'

const LogIn = () => {
    const validationSchema = yup.object().shape({
        login: yup.string().typeError('login is incorrect').required('this field is required *'),
        password: yup.string().typeError('password is incorrect').required('this field id required *')
    })

    const dispatch = useDispatch()
    const navigate = useNavigate()
    const { from } = useParams()
    const { isFetched, currentUser } = useSelector(selectUsers)

    useEffect(() => {
        if(!isFetched) {
            dispatch(fetchingUsers())
        }
    }, [isFetched])

    useEffect(() => {
        if(currentUser){
            navigate(`/${from}`)
        }
    })
    
    return (
        <Formik
            initialValues={{
                login: '',
                password: ''
            }}

            validateOnBlur

            validationSchema={validationSchema}

            onSubmit={(values) => {
                dispatch(logIn({
                    username: values.login,
                    password: values.password
                }))

                values.login = ''
                values.password = ''
            }}  
        >
            {({values, errors, touched, handleChange, handleBlur, isValid, handleSubmit, dirty}) => (
                <div className="LogInCenter">
                    <div className="LogIn">
                        <img src={IMAGES.navLogo} alt=""/>
                        <form onSubmit={handleSubmit}>
                            <input 
                                type="text"
                                name="login"
                                onChange={handleChange}
                                onBlur={handleBlur}
                                value={values.login}
                                placeholder="username or email"
                            />

                            {touched.login && errors.login && <p>{errors.login}</p>}

                            <input
                                type="password" 
                                name="password"
                                onChange={handleChange}
                                onBlur={handleBlur} 
                                value={values.password}
                                placeholder="password"
                            />

                            {touched.password && errors.password && <p>{errors.password}</p>}


                            <button disabled={!isValid && !dirty} type="submit">Log In</button>
                        </form>
                    </div>
                </div>
            )}
        </Formik>
    )
}

export default LogIn