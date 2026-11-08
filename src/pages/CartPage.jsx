import { useCart } from '../context/CartContext';

export default function CartPage() {
  const { cart, removeFromCart, clearCart } = useCart();

  return (
    <div style={{ padding: '2rem', maxWidth: '800px', margin: '0 auto' }}>
      <h1 style={{ color: '#581c87' }}>Shopping Cart</h1>
      {cart.length === 0 ? (
        <p style={{ color: '#6b21a8' }}>Your cart is empty.</p>
      ) : (
        <>
          <button 
            onClick={clearCart} 
            style={{ 
              marginBottom: '1.5rem', 
              padding: '0.5rem 1.2rem', 
              backgroundColor: '#9333ea', 
              color: 'white', 
              border: 'none', 
              borderRadius: '8px', 
              cursor: 'pointer',
              fontWeight: '600'
            }}
          >
            Clear Cart
          </button>
          <ul style={{ listStyle: 'none', padding: 0 }}>
            {cart.map((item) => (
              <li key={item.id} style={{ 
                display: 'flex', 
                justify: 'space-between', 
                alignItems: 'center', 
                marginBottom: '1rem', 
                borderBottom: '1px solid #f3e8ff', 
                paddingBottom: '0.75rem' 
              }}>
                <div>
                  <strong style={{ color: '#3b0764' }}>{item.name}</strong> 
                  <span style={{ color: '#7e22ce', marginLeft: '0.5rem' }}>
                    — ₱{item.price.toLocaleString()} x {item.quantity}
                  </span>
                </div>
                <button 
                  onClick={() => removeFromCart(item.id)} 
                  style={{ 
                    color: '#c084fc', 
                    border: 'none', 
                    background: 'none', 
                    cursor: 'pointer', 
                    fontWeight: 'bold' 
                  }}
                >
                  Remove
                </button>
              </li>
            ))}
          </ul>
        </>
      )}
    </div>
  );
}