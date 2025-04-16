import { useCartSelector } from "../store/hooks"

function CartItems() {

  const cartItems = useCartSelector((state) => state.cart.items)

  const cartTotal = cartItems.reduce(
    (value,item) => value + item.price * item.quantity , 0
  )

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
                <button>-</button>
                <span>{item.quantity}</span>
                <button>+</button>
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