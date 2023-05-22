import { useState } from 'react'
import { AddNewProductForm } from './components/AddNewProductForm';
import { Product } from './components/Product';

import './global.css'

export function App() {
  const [products, setProducts] = useState([{
    id: 1,
    item: "Meias.",
    qtde: 6
  }, {
    id: 2,
    item: "Agasalhos.",
    qtde: 2
  }]);

  function handleAddNewProduct() {
    return
  }

  return (
    <div className='container mx-auto px-4 flex items-center justify-center'>
      <h2 className=''>Lista de compras</h2>
      <AddNewProductForm handleAddNewProduct={handleAddNewProduct} />
      {products.map((product) => {
        return (
          <Product key={product.id} id={product.id} item={product.item} qtde={product.qtde} />
        )
      })}
    </div>
  )
}
