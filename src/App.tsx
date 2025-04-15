import { Provider } from "react-redux"
import { store } from "./store/store"
import ProductList from "./components/ProductList"
import { productData } from "./data/item"
import Product from "./components/Product"
import Navbar from "./components/Navbar"


function App() {
  return (
    <Provider store={store}>
      <Navbar />
      <ProductList>
        <div className="grid grid-cols-4 w-6xl gap-3">
          {productData.map((item) => (
            <div key={item.id}>
              <Product {...item} />
            </div>
          ))}
        </div>
      </ProductList>
    </Provider>
  )
}


export default App