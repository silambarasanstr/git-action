const products = [
  {
    id: 1,

    image: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=800",

    title: "TechStore - E-commerce Application",

    originalPrice: "4,678.00",
    discountPrice: "1,336.00",
    discount: "-71%",
    rating: 5,

    frontEnd: "React, JavaScript, Tailwind CSS",
    backEnd: "Node.js, Express.js, MongoDB",

    // =========================
    // Project Information
    // =========================

    projectDescription:
      "TechStore is a full-stack e-commerce application where users can browse products, filter products by category, view product details, manage their cart, place orders and manage their account.",

    projectType: "Full Stack E-commerce Application",

    role: "Full Stack Developer",

    projectDuration: "3 Months",

    // =========================
    // Technologies
    // =========================

    technologies: [
      "React",
      "JavaScript",
      "Tailwind CSS",
      "React Router",
      "Redux Toolkit",
      "Node.js",
      "Express.js",
      "MongoDB",
      "Mongoose",
      "JWT",
    ],

    // =========================
    // Features
    // =========================

    features: [
      "User Registration",
      "User Login",
      "Product Listing",
      "Product Search",
      "Product Filtering",
      "Category Based Products",
      "Product Details",
      "Add to Cart",
      "Update Cart Quantity",
      "Remove Cart Items",
      "Checkout",
      "Order Management",
      "Order Details",
      "Authentication",
      "Protected Routes",
      "Responsive Design",
    ],

    // =========================
    // Pages
    // =========================

    pages: [
      {
        name: "Home",
        path: "/",
        description:
          "Displays featured products, categories, offers and the main e-commerce sections.",
      },
      {
        name: "Products",
        path: "/products",
        description:
          "Displays all available products in a responsive product grid.",
      },
      {
        name: "Product Details",
        path: "/products/:id",
        description:
          "Displays complete information about the selected product including images, description, price and availability.",
      },
      {
        name: "Category Products",
        path: "/category/:categoryName",
        description: "Displays products based on the selected category.",
      },
      {
        name: "Cart",
        path: "/cart",
        description:
          "Displays selected products and allows users to update quantity or remove products.",
      },
      {
        name: "Checkout",
        path: "/checkout",
        description:
          "Allows users to enter shipping information and place an order.",
      },
      {
        name: "Login",
        path: "/login",
        description:
          "Allows existing users to authenticate using email and password.",
      },
      {
        name: "Register",
        path: "/register",
        description: "Allows new users to create an account.",
      },
      {
        name: "Orders",
        path: "/orders",
        description: "Displays the authenticated user's previous orders.",
      },
      {
        name: "Order Details",
        path: "/orders/:orderId",
        description: "Displays complete information about a particular order.",
      },
    ],

    // =========================
    // Folder Structure
    // =========================

    folderStructure: `src/
│
├── components/
│   ├── Navbar.jsx
│   ├── Footer.jsx
│   ├── ProductCard.jsx
│   ├── LoadingState.jsx
│   ├── ErrorState.jsx
│   └── EmptyState.jsx
│
├── pages/
│   ├── Home.jsx
│   ├── Products.jsx
│   ├── ProductDetails.jsx
│   ├── CategoryProducts.jsx
│   ├── Cart.jsx
│   ├── Checkout.jsx
│   ├── Login.jsx
│   ├── Register.jsx
│   ├── Orders.jsx
│   └── OrderDetails.jsx
│
├── services/
│   ├── productService.js
│   ├── authService.js
│   └── orderService.js
│
├── data/
│   └── products.js
│
├── store/
│   ├── store.js
│   └── slices/
│       ├── authSlice.js
│       ├── cartSlice.js
│       └── orderSlice.js
│
├── routes/
│   └── AppRoutes.jsx
│
├── App.jsx
└── main.jsx`,

    

    // =========================
    // Application Flow
    // =========================

    applicationFlow: [
      "User opens the e-commerce website.",
      "Home page displays products and categories.",
      "User navigates to Products page.",
      "Products are loaded from the product service.",
      "User selects a product.",
      "React Router navigates to /products/:id.",
      "ProductDetails gets the ID using useParams().",
      "Product service finds the matching product.",
      "Complete product information is displayed dynamically.",
      "User can navigate to other pages such as Cart, Checkout and Orders.",
    ],

    // =========================
    // Installation
    // =========================

    installation: ["yarn install", "yarn dev"],
  },

  {
    id: 2,

    image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=800",

    title: "Aura Shop - Ecommerce Admin",

    originalPrice: "3,999.00",
    discountPrice: "999.00",
    discount: "-75%",
    rating: 4,

    frontEnd: "React, JavaScript, Tailwind CSS",
    backEnd: "Node.js, Express.js",

    projectDescription:
      "Aura Shop is an e-commerce application with customer shopping functionality and an administration module for managing products and orders.",

    projectType: "E-commerce with Admin Dashboard",

    role: "Frontend Developer",

    projectDuration: "2 Months",

    technologies: [
      "React",
      "JavaScript",
      "Tailwind CSS",
      "React Router",
      "Redux Toolkit",
      "Node.js",
      "Express.js",
      "MongoDB",
    ],

    features: [
      "Authentication",
      "Product Management",
      "Category Management",
      "Shopping Cart",
      "Checkout",
      "Order Management",
      "Admin Dashboard",
      "Responsive Design",
    ],

    pages: [
      {
        name: "Home",
        path: "/",
        description: "Main landing page.",
      },
      {
        name: "Products",
        path: "/products",
        description: "Displays available products.",
      },
      {
        name: "Product Details",
        path: "/products/:id",
        description: "Displays complete product information.",
      },
      {
        name: "Cart",
        path: "/cart",
        description: "Manages cart items.",
      },
      {
        name: "Checkout",
        path: "/checkout",
        description: "Handles order checkout.",
      },
    ],

    folderStructure: `src/
│
├── components/
│   ├── Navbar.jsx
│   ├── Footer.jsx
│   └── ProductCard.jsx
│
├── pages/
│   ├── Home.jsx
│   ├── Products.jsx
│   ├── ProductDetails.jsx
│   ├── Cart.jsx
│   └── Checkout.jsx
│
├── services/
│   ├── productService.js
│   ├── authService.js
│   └── orderService.js
│
├── store/
│   ├── store.js
│   └── slices/
│
└── App.jsx`,

    architecture: [
      {
        title: "Frontend",
        description:
          "React is used to build reusable and maintainable user interfaces.",
      },
      {
        title: "State Management",
        description: "Redux Toolkit is used for global application state.",
      },
      {
        title: "Backend",
        description: "Node.js and Express.js provide REST APIs.",
      },
      {
        title: "Database",
        description: "MongoDB stores users, products and order information.",
      },
    ],

    applicationFlow: [
      "User visits the application.",
      "Products are loaded from the backend.",
      "User selects a product.",
      "Product details are displayed.",
      "User adds products to cart.",
      "User proceeds to checkout.",
      "Order is created and stored.",
    ],

    installation: ["yarn install", "yarn dev"],
  },
];

export default products;
