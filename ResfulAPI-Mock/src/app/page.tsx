import { addProduct } from '../../actions/serverActions'

import { Product } from '../../typings'

export default async function Home() {
  const res = await fetch(
    'https://64a7731a096b3f0fcc814f7f.mockapi.io/products',
    {
      cache: 'no-cache',
      next: {
        tags: ['products'], // for re-fetch data
      },
    }
  )
  const products: Product[] = await res.json()

  return (
    <main className="relative">
      <h1 className="text-3xl font-bold text-center">Product Warehouse</h1>

      <form
        action={addProduct}
        className="flex flex-col gap-5 max-w-xl mx-auto p-5"
      >
        <input
          name="product"
          type="text"
          placeholder="Enter product name"
          className="border border-gray-300 p-2 rounded-md"
        />
        <input
          name="price"
          type="text"
          placeholder="Enter price name"
          className="border border-gray-300 p-2 rounded-md"
        />
        <button className="border rounded-md bg-blue-500 text-white p-2">
          Add Product
        </button>
      </form>

      <h2 className="font-bold p-5"> List of Products</h2>
      <div className="flex flex-wrap gap-5">
        {products.map((product) => (
          <div key={product.id} className="p-5 shadow rounded-md">
            <p>{product.product}</p>
            <p>NZD {product.price}</p>
          </div>
        ))}
      </div>
    </main>
  )
}
