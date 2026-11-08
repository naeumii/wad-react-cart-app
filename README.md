# React Product List & Shopping Cart Application

A React web application built with React Router and React Context API featuring a dynamic product catalog, navigation bar item counter, and a shopping cart management system.

## Setup Instructions

1. Clone this repository:
   ```bash
   git clone git@github.com:naeumii/wad-react-cart-app.git
   cd wad-react-cart-app
Install the required dependencies:

Bash
npm install
Start the development server:

Bash
npm run dev
Open http://localhost:5173 in your browser to view the application.

# Cart State Explanation
The shopping cart state is managed globally using React's Context API defined in src/context/CartContext.jsx. By wrapping the top-level root application in App.jsx with <CartProvider>, both the ProductsPage and CartPage components can access and update the shared cart state using the custom useCart() hook. This architectural design ensures that the cart item count in the navigation bar stays consistent and perfectly synchronized across all client-side routes.