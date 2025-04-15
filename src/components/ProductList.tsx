import { type ReactNode } from "react"

type ProductListProps = {
  children: ReactNode
}

function ProductList({ children }: ProductListProps) {
  return (
    <div>
      <div>
        {children}
      </div>
    </div>
  )
}

export default ProductList