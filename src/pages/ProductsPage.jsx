import { useCart } from '../context/CartContext';

const sampleProducts = [
  { id: 1, name: 'Wireless Headphones', price: 2999 },
  { id: 2, name: 'Mechanical Keyboard', price: 4500 },
  { id: 3, name: 'Gaming Mouse', price: 1800 },
];

export default function ProductsPage() {
  const { addToCart } = useCart();

  return (
    <div style={{ padding: '2rem', maxWidth: '1000px', margin: '0 auto' }}>
      <h1 style={{ color: '#581c87' }}>Products</h1>
      <div style={{ display: 'grid', gap: '1.5rem', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))' }}>
        {sampleProducts.map((product) => (
          <div key={product.id} style={{ 
            border: '1px solid #e9d5ff', 
            backgroundColor: '#faf5ff',
            padding: '1.5rem', 
            borderRadius: '12px', 
            boxShadow: '0 4px 6px -1px rgba(147, 51, 234, 0.05)' 
          }}>
            <h3 style={{ color: '#3b0764', marginTop: 0 }}>{product.name}</h3>
            <p style={{ color: '#7e22ce', fontWeight: 'bold', fontSize: '1.1rem' }}>₱{product.price.toLocaleString()}</p>
            <button 
              onClick={() => addToCart(product)} 
              style={{ 
                width: '100%',
                padding: '0.6rem 1rem', 
                backgroundColor: '#7e22ce', 
                color: 'white', 
                border: 'none', 
                borderRadius: '8px', 
                cursor: 'pointer',
                fontWeight: '600'
              }}
            >
              Add to Cart
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}