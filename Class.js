// Initialize an empty shopping cart
const cart = [];

// Add Items to the Cart
const addItem = (productId, productName, quantity, price) => {
  // Create a product object
  const product = { productId, productName, quantity, price };

  // Add the product to the cart
  cart.push(product);

  //message to confirm the item has been added
  console.log(`${productName} added to cart.`);
};

//Remove and Update Items
const removeItem = (productId) => {
  // Find the index of the product to remove
  const index = cart.findIndex((product) => product.productId === productId);

  // If the product is found remove it from the cart
  if (index > -1) {
    cart.splice(index, 1);
    console.log(`Product with ID ${productId} removed from cart.`);
  } else {
    console.log(`Product with ID ${productId} not found in cart.`);
  }
};

const updateItemQuantity = (productId, newQuantity) => {
  // Find the product in the cart
  const product = cart.find((product) => product.productId === productId);

  // If the product is found update its quantity
  if (product) {
    product.quantity = newQuantity;
    console.log(`Quantity of ${product.productName} updated to ${newQuantity}.`);
  } else {
    console.log(`Product with ID ${productId} not found in cart.`);
  }
};

// Calculate Total Cost
const calculateTotalCost = () => {
  // Use reduce to calculate the total cost of all items in the cart
  const totalCost = cart.reduce((acc, product) => {
    return acc + product.quantity * product.price;
  }, 0);

  return totalCost;
};

//Display Cart Summary
const displayCartSummary = () => {
  // Use map to create an array of strings with product information
  const cartSummary = cart.map((product) => {
    const totalPriceForProduct = product.quantity * product.price;
    return `${product.productName} x ${product.quantity} - $${totalPriceForProduct.toFixed(2)}`;
  });

  // Filter out items with zero quantity
  const filteredCartSummary = cartSummary.filter((item) => !item.includes('x 0 -'));

  // Display the cart summary
  console.log('--- Cart Summary ---');
  filteredCartSummary.forEach((item) => console.log(item));
  console.log(`Total: $${calculateTotalCost().toFixed(2)}`);
};

// Bonus Apply Discount
const applyDiscount = (discountCode) => {
  // Example discount logic:
  if (discountCode === 'SUMMER10') {
    const totalCost = calculateTotalCost();
    const discountAmount = totalCost * 0.1;
    const discountedTotal = totalCost - discountAmount;
    console.log(`Discount applied! New total: $${discountedTotal.toFixed(2)}`);
  } else {
    console.log('Invalid discount code.');
  }
};

// Give data :)
addItem(1, 'Apple', 2, 0.99);
addItem(2, 'Gorocery', 1, 1.99);
addItem(3, 'Milk', 1, 5.99);
removeItem(2); 
updateItemQuantity(1, 3); 
displayCartSummary(); 
applyDiscount('SUMMER10'); 