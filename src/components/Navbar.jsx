import { Link } from 'react-router-dom';
import { useCart } from '../context/CartContext';

export default function Navbar() {
  const { totalCount } = useCart();

  return (
    <nav style={{ 
      padding: '1rem 2rem', 
      background: '#3b0764',
      color: '#fff', 
      display: 'flex', 
      justify: 'space-between', 
      alignItems: 'center',
      boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1)'
    }}>
      <h2 style={{ margin: 0, color: '#f3e8ff' }}>My Shop</h2>
      <div>
        <Link to="/products" style={{ color: '#f3e8ff', marginRight: '1.5rem', textDecoration: 'none', fontWeight: '500' }}>
          Products
        </Link>
        <Link to="/cart" style={{ 
          color: '#ffffff', 
          backgroundColor: '#6b21a8', 
          padding: '0.4rem 0.9rem', 
          borderRadius: '20px', 
          textDecoration: 'none', 
          fontWeight: 'bold' 
        }}>
          Cart 🛒 ({totalCount})
        </Link>
      </div>
    </nav>
  );
}