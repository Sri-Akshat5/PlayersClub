import { useNavigate } from 'react-router-dom';
import { viewTransitionNavigate } from '../utils/viewTransitionNavigate';

const ProductCard = ({ product }) => {
  const navigate = useNavigate();

  return (
    <div
      className="bg-white shadow hover:shadow-lg transition cursor-pointer"
      onClick={() => viewTransitionNavigate(navigate, `/products/${product.id}`)}
    >
      <img
        src={product.image} 
        alt={product.name}
        className="w-full h-64 object-cover rounded-lg"
        data-view-transition-name={`product-image-${product.id}`} 
      />

      <div className="p-4">
        <h2 className="text-lg font-semibold">{product.name}</h2>
        <p className="text-gray-500">{product.price}</p>
      </div>
    </div>
  );
};

export default ProductCard;
