'use client'

import { useTransition } from 'react'
import { addProduct } from '../actions/serverActions'

function AddProductButton() {
  const [isPending, startTrasition] = useTransition()

  const formData = new FormData()
  formData.append('product', 'Macbook Pro')
  formData.append('price', '1300')

  return (
    //plug the forData to addProduct as it needs data
    <button
      onClick={() => startTrasition(() => addProduct(formData))}
      className="border bg-blue-500 text-white p-2 rounded-md w-48"
      style={{ position: 'fixed', right: '20px', bottom: '20px' }}
    >
      {isPending ? 'Adding..' : 'Add Mackbook Pro'}
    </button>
  )
}

export default AddProductButton
