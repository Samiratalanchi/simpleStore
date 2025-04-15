import { useState } from "react"
import Cart from "./Cart"
import { useCartSelector } from "../store/hooks"


function Navbar() {
  const [isCartOpen, SetCartOpen] = useState(false)

  const cartQuantity = useCartSelector((state) => state.cart.items.reduce((value, item) => value + item.quantity , 0))

  function handleOpenCart() {
    SetCartOpen(!isCartOpen)
  }
  return (
    <>
      {isCartOpen && 
        <Cart onClose={handleOpenCart} />
      }
      <div>
        <button onClick={handleOpenCart}>سبد خرید ({cartQuantity})</button>
      </div>
    </>
  )
}

export default Navbar