import { useState } from "react"
import Cart from "./Cart"


function Navbar() {
  const [isCartOpen, SetCartOpen] = useState(false)

  function handleOpenCart() {
    SetCartOpen(!isCartOpen)
  }
  return (
    <>
      {isCartOpen && 
        <Cart onClose={handleOpenCart} />
      }
      <div>
        <button onClick={handleOpenCart}>سبد خرید (۰)</button>
      </div>
    </>
  )
}

export default Navbar