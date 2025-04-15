import CartItems from "./CartItems"

type CartProps = {
  onClose: () => void
}

function Cart({ onClose } : CartProps) {
  return (
    <>
      <div className="" />
      <h2>سبد خرید</h2>
      <CartItems />
      <button onClick={onClose}>بستن</button>
    </>
  )
}

export default Cart