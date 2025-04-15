type ProductProps = {
  id: string,
  title: string,
  price: number,
  image: string
}

function Product({ title, price, image } : ProductProps) {
  return (
    <div className="">
      <img src={image} className="" />
      <div>
        <h3 className="">{title}</h3>
        <p>{price}</p>
      </div>
      <button>افزودن به سبد خرید</button>
    </div>
  )
}

export default Product