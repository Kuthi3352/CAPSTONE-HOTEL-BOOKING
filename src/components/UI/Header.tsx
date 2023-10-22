import { PATH } from "constant"
import { useSelector } from "react-redux"
import { useNavigate } from "react-router-dom"
import { RootState, useAppDispatch } from "store"
import { AuthLoginActions } from "store/Auth"



const Header = () => {
    const navigate = useNavigate()
    const dispatch = useAppDispatch()
    const { isLogin, AuthLogin } = useSelector((state: RootState) => state.AuthLogin)
    

    return (
        <div className="header-bar">
            <div className="container flex justify-between header-content">
                <div className="logo">
                    <h1>airbnb</h1>
                </div>
                <div className="auth">
                    {isLogin ?
                        <div>
                            <button className="authBtn">Hello {AuthLogin?.user.name} </button>
                            <button onClick={() => {
                                dispatch(AuthLoginActions.logOut())
                            }} className="authBtn">Log out</button>
                        </div>
                        :
                        <div>
                            <button className="authBtn" onClick={() => {
                                navigate(`${PATH.login}`)
                            }}>Login</button>
                            <button className="authBtn" onClick={() => {
                                navigate(`${PATH.register}`)
                            }}>Register</button>
                        </div>
                    }
                </div>
            </div>
        </div>
    )
}

export default Header


