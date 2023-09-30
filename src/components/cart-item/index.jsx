import { AiOutlinePlus, AiOutlineMinus, AiOutlineClose } from "react-icons/ai"

import * as Styles from "./styles"
import { useDispatch } from "react-redux"
import {
    removeProduct,
    increaseQuantity,
    decreaseQuantity,
} from "../../redux/cart/slice"

const CartItem = ({ product }) => {
    const dispatch = useDispatch()

    const handleRemoveClick = () => {
        dispatch(removeProduct(product.id))
    }

    const handleIncreaseClick = () => {
        dispatch(increaseQuantity(product.id))
    }

    const handleDecreaseClick = () => {
        dispatch(decreaseQuantity(product.id))
    }

    return (
        <Styles.CartItemContainer>
            <Styles.CartItemImage imageUrl={product.imageUrl} />

            <Styles.CartItemInfo>
                <p>{product.name}</p>
                <p>R${product.price}</p>

                <Styles.CartItemQuantity>
                    <AiOutlineMinus
                        size={20}
                        onClick={handleDecreaseClick}
                        aria-label={`Decrease quantity of ${product.name}`}
                    />
                    <p>{product.quantity}</p>
                    <AiOutlinePlus
                        size={20}
                        onClick={handleIncreaseClick}
                        aria-label={`Increase quantity of ${product.name}`}
                    />
                </Styles.CartItemQuantity>
            </Styles.CartItemInfo>

            <Styles.RemoveButton
                onClick={handleRemoveClick}
                aria-label={`Remove ${product.name}`}
            >
                <AiOutlineClose size={18} />
            </Styles.RemoveButton>
        </Styles.CartItemContainer>
    )
}

export default CartItem
