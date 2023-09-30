import { useSelector } from "react-redux"
import * as Styles from "./styles"
import CartItem from "../cart-item"
import { selectProductsTotalPrice } from "../../redux/cart/cart-selector"

const Cart = ({ isVisible, setIsVisible }) => {
    const handleEscapeAreaClick = () => setIsVisible(false)

    const { products } = useSelector((rootReducer) => rootReducer.cartReducer)
    const totalPrice = useSelector(selectProductsTotalPrice)
    return (
        <Styles.CartContainer isVisible={isVisible}>
            <Styles.CartEscapeArea onClick={handleEscapeAreaClick} />
            <Styles.CartContent>
                <Styles.CartTitle>Your basket</Styles.CartTitle>
                {products.map((product) => (
                    <CartItem product={product} key={product.id} />
                ))}
                {products.length !== 0 ? (
                    <Styles.CartTotal>
                        Total R$
                        <span>{totalPrice}</span>
                    </Styles.CartTotal>
                ) : (
                    <Styles.CartTotal>
                        Oh no! it looks so empty :(
                    </Styles.CartTotal>
                )}
            </Styles.CartContent>
        </Styles.CartContainer>
    )
}

export default Cart
