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

  function handleAddNewProduct(formData) {
    setProducts([
      ...products,
      {
        id: products[products.length - 1].id + 1,
        item: formData.item,
        qtde: formData.qtde
      }
    ])
  }

  return (
    <div className='container mx-auto w-6/12 flex flex-col gap-4 items-center justify-center mt-5 border-2 p-4'>
      <h1 className='font-bold border-b-2 mb-3 w-full text-center p-2 text-xl'>Lista de compras</h1>
      <AddNewProductForm handleAddNewProduct={handleAddNewProduct} />
      <div className="text-start w-full">
      {products.map((product) => {
        return (
          <Product key={product.id} id={product.id} item={product.item} qtde={product.qtde} />
        )
      })}
      </div>
    </div>
  )
}
