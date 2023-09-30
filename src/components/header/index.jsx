import { useState } from "react"
import { useDispatch, useSelector } from "react-redux"

import Cart from "../cart/index"

import * as Styles from "./styles"

// import { loginUser, logoutUser } from "../../redux/user/actions"
import { selectProductsCount } from "../../redux/cart/cart-selector"
import { BsFillCartFill } from "react-icons/bs"
import { login, logout } from "../../redux/user/slice"

function Header() {
    const [cartIsVisible, setCartIsVisible] = useState(false)

    const dispatch = useDispatch()

    const { currentUser } = useSelector((state) => state.userReducer)

    const productsCount = useSelector(selectProductsCount)

    const handleCartClick = () => {
        setCartIsVisible(true)
    }

    const handleLoginClick = () => {
        dispatch(login({ name: "Jessica", email: "jessie@dolza.com" }))
    }

    const handleLogoutClick = () => {
        dispatch(logout())
    }

    return (
        <Styles.Container>
            <Styles.Logo>My Store :)</Styles.Logo>
            <Styles.Buttons>
                {currentUser ? (
                    <>
                        <div>Hello {currentUser.name}</div>
                        <div onClick={handleLogoutClick}>Sign out</div>
                    </>
                ) : (
                    <div onClick={handleLoginClick}>Log in</div>
                )}
                <div>
                    <div onClick={handleCartClick}>
                        <BsFillCartFill />
                        <span>{productsCount}</span>
                    </div>
                </div>
            </Styles.Buttons>

            <Cart isVisible={cartIsVisible} setIsVisible={setCartIsVisible} />
        </Styles.Container>
    )
}

export default Header
