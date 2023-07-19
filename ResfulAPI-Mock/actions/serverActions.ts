'use server'

import { Product } from '../typings'
import { revalidateTag } from 'next/cache'

export const addProduct = async (e: FormData) => {
  const product = e.get('product')?.toString()
  const price = e.get('price')?.toString()

  if (!product || !price) return

  const newProduct: Product = {
    product,
    price,
  }
  // Do sever mutation
  await fetch('https://64a7731a096b3f0fcc814f7f.mockapi.io/products', {
    method: 'POST',
    body: JSON.stringify(newProduct),
    headers: {
      'Content-Type': 'application/json', // Important to Post New Data as JSON
    },
  })

  revalidateTag('products') //re-update the server
  // revalidateTag("/") => all the tags Fetching
}

export const deleteProduct = async (id: number) => {
  await fetch(`https://64a7731a096b3f0fcc814f7f.mockapi.io/products/${id}`, {
    method: 'DELETE',
    headers: {
      'Content-Type': 'application/json',
    },
  })
  revalidateTag('products')
}
