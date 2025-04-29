import { motion } from "framer-motion";

const products = [
    {
        image: '/assets/images/biji.jpg',
        name: 'Candil',
        price: 'Rp 15.000',
        whatsappNumber: '6285283270368',
    },
    {
        image: '/assets/images/klepon.jpg',
        name: 'Klepon',
        price: 'Rp 10.000',
        whatsappNumber: '6285283270368',
    },
    {
        image: '/assets/images/lumpur.jpg',
        name: 'Kue Lumpur',
        price: 'Rp 12.000',
        whatsappNumber: '6285283270368',
    },
    {
        image: '/assets/images/lemes.jpg',
        name: 'Lemet',
        price: 'Rp 10.000',
        whatsappNumber: '6285283270368',
    },
    {
        image: '/assets/images/dadar.jpg',
        name: 'Dadar Gulung',
        price: 'Rp 10.000',
        whatsappNumber: '6285283270368',
    },
    {
        image: '/assets/images/puki.jpg',
        name: 'Kue Pukis',
        price: 'Rp 15.000',
        whatsappNumber: '6285283270368',
    },
];

const Products = () => {
    return (
        <section id="products" className="py-16 bg-gray-50">
            <div className="container mx-auto px-4 text-center">
                <h2 className="text-3xl font-bold text-green-700 mb-10">Produk Kami</h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
                    {products.map((product, index) => (
                        <motion.div
                            key={index}
                            className="bg-white rounded-lg shadow-md overflow-hidden"
                            initial={{ opacity: 0, y: 50 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, delay: index * 0.2 }}
                        >
                            <img
                                src={product.image}
                                alt={product.name}
                                className="w-full h-48 object-cover"
                            />
                            <div className="p-4">
                                <h3 className="text-xl font-semibold text-green-700 mb-2">{product.name}</h3>
                                <p className="text-gray-600 mb-4">{product.price}</p>
                                <a
                                    href={`https://wa.me/${product.whatsappNumber}?text=${encodeURIComponent(`Halo, saya tertarik untuk membeli ${product.name}. Apakah masih tersedia?.`)}`}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="inline-block bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded-full text-sm transition"
                                >
                                    Pesan Sekarang
                                </a>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Products;
