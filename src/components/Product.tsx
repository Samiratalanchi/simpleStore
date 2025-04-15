type ProductProps = {
  id: string,
  title: string,
  price: number,
  image: string
}

function Product({ title, price, image } : ProductProps) {
  return (
    <div>
      <img src={image} />
      <div>
        <h3>{title}</h3>
        <p>{price}</p>
      </div>
      <button>افزودن به سبد خرید</button>
    </div>
  )
}

export default Product