import { BsCartPlus } from "react-icons/bs"
import { useDispatch } from "react-redux"
import CustomButton from "../custom-button/index"
import * as Styles from "./styles"
import { addProduct } from "../../redux/cart/slice"

const ProductItem = ({ product }) => {
    const dispatch = useDispatch()

    const handleProductClick = () => {
        dispatch(addProduct(product))
    }

    return (
        <Styles.ProductContainer>
            <Styles.ProductImage imageUrl={product.imageUrl}>
                <CustomButton
                    onClick={handleProductClick}
                    startIcon={<BsCartPlus />}
                >
                    Adicionar ao carrinho
                </CustomButton>
            </Styles.ProductImage>

            <Styles.ProductInfo>
                <p>{product.name}</p>
                <p>R${product.price}</p>
            </Styles.ProductInfo>
        </Styles.ProductContainer>
    )
}

export default ProductItem
