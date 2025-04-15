import { useDispatch } from "react-redux"
import { addToCart } from "../store/cart-slice"

type ProductProps = {
  id: string,
  title: string,
  price: number,
  image: string
}

function Product({ id, title, price, image } : ProductProps) {

  const dispatch = useDispatch()

  function handleAddToCart() {
    dispatch(addToCart({ id, title, price }))
  }

  return (
    <div className="border p-3 hover:shadow-2xl text-center">
      <img src={image} className="" />
      <div>
        <h3 className="">{title}</h3>
        <p>{price},000</p>
      </div>
      <button
        className="p-2 bg-gray-400 hover:bg-black hover:text-white transition duration-150 cursor-pointer rounded-xl">
          افزودن به سبد خرید
      </button>
    </div>
  )
}

export default Product