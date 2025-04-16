import { type CartItem, addToCart, removeFromCart } from "../store/cart-slice"
import { useCartSelector, useCartDispatch  } from "../store/hooks"

function CartItems() {

  const cartItems = useCartSelector((state) => state.cart.items)

  const dispatch = useCartDispatch()

  const cartTotal = cartItems.reduce(
    (value,item) => value + item.price * item.quantity , 0
  )

  function handleAddToCart(item: CartItem) {
    dispatch(addToCart(item))
  }

  function handleRemoveFromCart(id: string) {
    dispatch(removeFromCart(id))
  }

  return (
    <div>
      <p>محصولی در سبد خرید وجود ندارد.</p>
      <ul>
        {cartItems.map((item) => {
          return (
            <div key={item.id}>
              <div>
                <span>{item.title}</span>
              </div>
              <div>
                <button onClick={() => handleRemoveFromCart(item.id)}>-</button>
                <span>{item.quantity}</span>
                <button onClick={() => handleAddToCart(item)}>+</button>
              </div>
            </div>
          )
        })}
      </ul>
      <div>
        <span>مجموع:{cartTotal}تومان</span>
      </div>
    </div>
  )
}

export default CartItems