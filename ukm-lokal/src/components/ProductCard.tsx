import React from 'react';

interface ProductProps {
  image: string;
  name: string;
  price: string;
  whatsappNumber: string;
}

const ProductCard: React.FC<ProductProps> = ({ image, name, price, whatsappNumber }) => {
  const message = `Halo, saya tertarik untuk membeli ${name}. Apakah masih tersedia?`;

  return (
    <div className="bg-white rounded-lg shadow hover:shadow-lg transition p-4 flex flex-col">
      <img src={image} alt={name} className="w-full h-48 object-cover rounded-md" />
      <div className="flex-grow mt-4">
        <h3 className="text-xl font-semibold text-gray-800">{name}</h3>
        <p className="text-green-700 text-lg">{price}</p>
      </div>
      <a
        href={`https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`}
        target="_blank"
        rel="noopener noreferrer"
        className="mt-4 bg-green-600 hover:bg-green-700 text-white text-center py-2 rounded-full transition"
      >
        Order via WhatsApp
      </a>
    </div>
  );
};

export default ProductCard;
