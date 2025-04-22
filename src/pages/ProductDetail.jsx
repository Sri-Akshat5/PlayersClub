import { useParams } from 'react-router-dom'
import products from '../data/products'

const ProductDetail = () => {
  const { id } = useParams()
  const product = products.find((p) => p.id === id)

  if (!product) return <div className="p-6">Product not found.</div>

  return (
    <div className="min-h-screen bg-white p-6 flex flex-col md:flex-row gap-10">
      <img
  src={product.image}
  alt={product.name}
  className="w-fit md:w-1/2 h-[400px] object-cover rounded-lg"
  data-view-transition-name={`product-image-${product.id}`}
/>

      <div className="flex-1">
        <h1 className="text-4xl font-bold">{product.name}</h1>
        <p className="text-gray-500 text-xl mt-2">{product.price}</p>
        <p className="mt-6 text-gray-700">{product.description}</p>
        <button className="mt-8 bg-black text-white px-6 py-2 uppercase text-sm hover:bg-gray-800 transition">
          Add to Cart
        </button>
      </div>
    </div>
  )
}

export default ProductDetail
