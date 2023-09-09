import { products } from "../../../data/products"; // Import your product data

export default function handler(req, res) {
  const {
    query: { id },
  } = req;
  // Ensure that 'id' is a valid integer or string without file extension
  const sanitizedId = id.replace(/\..+$/, ""); // Remove file extension
  const product = products.find(
    (product) => product.id === parseInt(sanitizedId)
  );

  // If no product found, return 404 status
  if (!product) {
    res.status(404).json({ message: "Product not found." });
    return;
  }

  // If product found, return product details
  res.status(200).json(product);
}
