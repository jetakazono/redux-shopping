import { useState } from "react"
import { useDispatch, useSelector } from "react-redux"

import Cart from "../cart/index"

import * as Styles from "./styles"

import { loginUser, logoutUser } from "../../redux/user/actions"

function Header() {
    const [cartIsVisible, setCartIsVisible] = useState(false)

    const dispatch = useDispatch()

    const { currentUser } = useSelector((state) => state.userReducer)

    console.log(currentUser)
    const handleCartClick = () => {
        setCartIsVisible(true)
    }

    const handleLoginClick = () => {
        dispatch(
            loginUser({ name: "Jessica Dolza", email: "jessie@dolza.com" })
        )
    }

    const handleLogoutClick = () => {
        dispatch(logoutUser())
    }

    return (
        <Styles.Container>
            <Styles.Logo>Jessie Store</Styles.Logo>
            <Styles.Buttons>
                {currentUser ? (
                    <div onClick={handleLogoutClick}>Sign out</div>
                ) : (
                    <div onClick={handleLoginClick}>Log in</div>
                )}

                <div onClick={handleCartClick}>basket</div>
            </Styles.Buttons>

            <Cart isVisible={cartIsVisible} setIsVisible={setCartIsVisible} />
        </Styles.Container>
    )
}

export default Header
