import { type ReactNode } from "react"

type ProductListProps = {
  children: ReactNode
}

function ProductList({ children }: ProductListProps) {
  return (
    <div className="relative flex justify-center">
        {children}
    </div>
  )
}

export default ProductList