export const shopData = [
  {
    shopName: "Elegant Apparel",
    shopSlug: "elegant-apparel",
    shopCategory: "Clothing",
    shopAddress: "123 Fashion St, New York, NY 10001",
    shopMapsLocation: "40.712776, -74.005974",
    productTags: ["fashion", "clothing", "style", "apparel", "trendy"],
  },
  {
    shopName: "Urban Furnishings",
    shopSlug: "urban-furnishings",
    shopCategory: "ProductsCommerce",
    shopAddress: "456 Home Ave, Los Angeles, CA 90001",
    shopMapsLocation: "34.052235, -118.243683",
    productTags: ["furniture", "home", "decor", "interior", "modern"],
  },
  {
    shopName: "Tech Haven",
    shopSlug: "tech-haven",
    shopCategory: "Electronics",
    shopAddress: "789 Gadget Rd, San Francisco, CA 94103",
    shopMapsLocation: "37.774929, -122.419418",
    productTags: [
      "electronics",
      "gadgets",
      "technology",
      "innovation",
      "devices",
    ],
  },
  {
    shopName: "Pepperstone Furnitures",
    shopSlug: "pepperstone_furnitures",
    shopCategory: "ProductsCommerce",
    shopAddress: "321 Industry Pkwy, Houston, TX 77001",
    shopMapsLocation: "29.760427, -95.369804",
    productTags: [
      "machinery",
      "industrial",
      "equipment",
      "manufacturing",
      "tools",
    ],
  },
  {
    shopName: "Delicious Kitchen",
    shopSlug: "delicious-kitchen",
    shopCategory: "Restaurant",
    shopAddress: "654 Culinary St, Chicago, IL 60601",
    shopMapsLocation: "41.878113, -87.629799",
    productTags: ["restaurant", "food", "dining", "gourmet", "cuisine"],
  },
  {
    shopName: "Sparkling Jewels",
    shopSlug: "sparkling-jewels",
    shopCategory: "Jewellery",
    shopAddress: "987 Glamour Ln, Miami, FL 33101",
    shopMapsLocation: "25.761680, -80.191790",
    productTags: ["jewellery", "accessories", "fashion", "gems", "luxury"],
  },
];

export const shopCategory = [
  {
    name: "Living Room Furniture",
  },
  {
    name: "Bedroom Furniture",
  },
  {
    name: "Dining Room Furniture",
  },
  {
    name: "Office Furniture",
  },
  {
    name: "Outdoor Furniture",
  },
  {
    name: "Kids' Furniture",
  },
  {
    name: "Storage & Organization",
  },
];
export const clothingShopCategory = [
  {
    name: "Men",
    subcategories: [
      {
        name: "Tshirt",
      },
      {
        name: "Pant",
      },
      {
        name: "Casual Wear",
      },
      {
        name: "Winter Clothes",
      },
      {
        name: "Ethnic Wear",
      },
      {
        name: "Formal Wear",
      },

      {
        name: "Accessories",
      },
    ],
  },
  {
    name: "Women",
    subcategories: [
      {
        name: "Tops",
      },
      {
        name: "Saree",
      },
      {
        name: "Casual Wear",
      },
      {
        name: "Winter Clothes",
      },
      {
        name: "Ethnic Wear",
      },
      {
        name: "Formal Wear",
      },
      {
        name: "Accessories",
      },
    ],
  },
  {
    name: "Kids",
    subcategories: [
      {
        name: "Tshirt",
      },
      {
        name: "Pant",
      },
      {
        name: "Casual Wear",
      },
      {
        name: "Winter Clothes",
      },
      {
        name: "Ethnic Wear",
      },
      {
        name: "Formal Wear",
      },

      {
        name: "Accessories",
      },
    ],
  },
];

export const foodCategory = [
  {
    name: "Appetizer",
  },
  {
    name: "Specials",
  },
  {
    name: "Traditional",
  },
  {
    name: "Continential",
  },
  {
    name: "Fast Food",
  },
  {
    name: "Main Course",
  },
  {
    name: "Breakfast",
  },
  {
    name: "Lunch",
  },
  {
    name: "Dinner",
  },
];
export const foodOrderTypes = [
  {
    name: "Delivery",
  },
  {
    name: "Pick-Up",
  },
  {
    name: "Dine-In",
  },
];
export const foodMenuItems = [
  {
    id: 1,
    name: "Puff-Puff",
    description: "Traditional Nigerian donut ball, rolled in sugar",
    price: 800,
    markedPrice: 1000,
    imageUrl:
      "https://images.unsplash.com/photo-1514326640560-7d063ef2aed5?q=80&w=1480&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    tag: "veg",
    category: "Appetizer",
  },
  {
    id: 2,
    name: "Suya",
    description: "Spicy skewered meat, a popular West African street food",
    price: 1200,
    markedPrice: 1500,
    imageUrl:
      "https://images.unsplash.com/photo-1527477396000-e27163b481c2?q=80&w=1453&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    tag: "non-veg",
    category: "Main Course",
  },
  {
    id: 3,
    name: "Jollof Rice",
    description: "A savory one-pot dish with tomatoes, peppers, and spices",
    price: 1500,
    markedPrice: 1800,
    imageUrl:
      "https://images.unsplash.com/photo-1512058564366-18510be2db19?q=80&w=1472&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    tag: "veg",
    category: "Main Course",
  },
  {
    id: 4,
    name: "Chicken Mo:Mo",
    description:
      "Steamed bean pudding made from chicken meat, beans and spices",
    price: 600,
    markedPrice: 800,
    imageUrl:
      "https://plus.unsplash.com/premium_photo-1661600643912-dc6dbb1db475?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTN8fHJlc3RhdXJhbnQlMjBmb29kfGVufDB8fDB8fHww",
    tag: "veg",
    category: "Specials",
  },
  {
    id: 5,
    name: "Egusi Soup",
    description: "A hearty soup made with melon seeds, leafy greens, and meat",
    price: 1800,
    markedPrice: 2200,
    imageUrl:
      "https://plus.unsplash.com/premium_photo-1699467558878-c200e71fff93?q=80&w=2071&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    tag: "non-veg",
    category: "Dessert",
  },
  {
    id: 6,
    name: "Akara",
    description: "Fried bean cakes, crunchy on the outside and soft inside",
    price: 500,
    markedPrice: 700,
    imageUrl:
      "https://images.unsplash.com/photo-1518133683791-0b9de5a055f0?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    tag: "veg",
    category: "Drinks",
  },
  {
    id: 7,
    name: "French Fries",
    description: "Crispy potato fries served with ketchup",
    price: 500,
    markedPrice: 600,
    imageUrl:
      "https://images.unsplash.com/photo-1518013431117-eb1465fa5752?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    tag: "veg",
    category: "Appetizer",
  },
  {
    id: 8,
    name: "Chicken Wings",
    description: "Crispy and flavorful chicken wings",
    price: 800,
    markedPrice: 1000,
    imageUrl:
      "https://images.unsplash.com/photo-1527477396000-e27163b481c2?q=80&w=1453&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    tag: "non-veg",
    category: "Appetizer",
  },
  {
    id: 9,
    name: "Margherita Pizza",
    description: "Classic Italian pizza with tomato, mozzarella, and basil",
    price: 600,
    markedPrice: 800,
    imageUrl:
      "https://images.unsplash.com/photo-1513104890138-7c749659a591?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    tag: "veg",
    category: "Main Course",
  },
  {
    id: 10,
    name: "Chicken Burger",
    description: "Grilled chicken in a creamy tomato sauce with spices",
    price: 900,
    markedPrice: 1200,
    imageUrl:
      "https://images.unsplash.com/photo-1457460866886-40ef8d4b42a0?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    tag: "non-veg",
    category: "Main Course",
  },
  {
    id: 11,
    name: "Chocolate Brownie",
    description: "Rich and decadent chocolate brownie served with ice cream",
    price: 400,
    markedPrice: 500,
    imageUrl:
      "https://images.unsplash.com/photo-1461009312844-e80697a81cc7?q=80&w=1988&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    tag: "veg",
    category: "Dessert",
  },
  {
    id: 12,
    name: "Vanilla Ice Cream",
    description: "Creamy vanilla flavored ice cream",
    price: 300,
    markedPrice: 400,
    imageUrl:
      "https://plus.unsplash.com/premium_photo-1671559020858-e1740fe4ff6e?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    tag: "veg",
    category: "Dessert",
  },
  {
    id: 13,
    name: "Hot Coffee",
    description: "Strong and aromatic freshly brewed coffee",
    price: 200,
    markedPrice: 250,
    imageUrl:
      "https://images.unsplash.com/photo-1504630083234-14187a9df0f5?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    tag: "veg",
    category: "Beverage",
  },
];

export const shopCampaigns = [
  {
    name: "Loyalty Campaigns",
  },
  {
    name: "Social Media Campaigns",
  },
  {
    name: "Social Cause Campaigns",
  },
  {
    name: "Referral Campaigns",
  },
  {
    name: "Seasonal Campaigns",
  },
];

export const FeaturedProductMenu = [
  {
    name: "Best Selling",
  },
  {
    name: "New Arrivals",
  },
  {
    name: "High Rated",
  },
  {
    name: "Flash Deal",
  },
];

export const categoryPages = [
  {
    name: "Clothing",
    slug: "clothing",
    imageUrl:
      "https://images.unsplash.com/photo-1462392246754-28dfa2df8e6b?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTR8fGZhc2hpb258ZW58MHwwfDB8fHww",
  },
  {
    name: "Accessories",
    slug: "accessories",
  },
  {
    name: "FootWears",
    slug: "footwears",
  },
  {
    name: "Furniture",
    slug: "furniture",
  },
  {
    name: "Electronics",
    slug: "electronics",
  },
  {
    name: "Foods",
    slug: "foods",
  },
  {
    name: "Hotels",
    slug: "hotels",
  },
];

export const responsive = {
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 3,
  },
  tablet: {
    breakpoint: { max: 1023, min: 464 },
    items: 2,
  },
  mobile: {
    breakpoint: { max: 767, min: 0 },
    items: 1,
  },
};

export const CampaignCardsContent = [
  {
    title: "Loyalty Discounts",
    description: "Get discount for every purchase with us.",
    earning: "5% for next buy",
  },

  {
    title: "Big Buy Discount",
    description: "Enjoy the best deals of the season. Limited time offers.",
    earning: "10% ",
  },

  {
    title: "Clearance Sale",
    description: "Yes we are clearing our stock. Grab yours right now.",
    earning: "20% - 60%",
  },
  {
    title: "Clearance Sale",
    description: "Yes we are clearing our stock. Grab yours right now.",
    earning: "20% - 60%",
  },
];

export const shopDiscounts = [
  {
    name: "1% - 10%",
  },
  {
    name: "10% - 20%",
  },
  {
    name: "20% - 30%",
  },
  {
    name: "30% - 40%",
  },
  {
    name: "50% +",
  },
  {
    name: "New Year Offer",
  },
  {
    name: "Happy Hour",
  },
  {
    name: "Free Delivery",
  },
  {
    name: "Valentine Day",
  },
];

export const productsTag = [
  {
    name: "Tshirts For Men",
  },
  {
    name: "Saree For Women",
  },
  {
    name: "Winter Collection",
  },
  {
    name: "Summer Collection",
  },
  {
    name: "Ethnic Wear for Women",
  },
  {
    name: "Formal Wear For Men",
  },
  {
    name: "SuperHero Wear for Kids",
  },
  {
    name: "Outerwear and Jackets",
  },
  {
    name: "Swimwear Collection",
  },
  {
    name: "Fitness and Activewear",
  },
  {
    name: "Party Wear Collection",
  },
  {
    name: "Vintage Collection",
  },
  {
    name: "Footwear Collection",
  },
  {
    name: "Accessories and Jewelry",
  },
];
