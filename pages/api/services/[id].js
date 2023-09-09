import { services } from "../../../data/services"; // Import your service data

export default function handler(req, res) {
  const {
    query: { id },
  } = req;
  // Ensure that 'id' is a valid integer or string without file extension
  const sanitizedId = id.replace(/\..+$/, ""); // Remove file extension
  const service = services.find(
    (service) => service.id === parseInt(sanitizedId)
  );

  // If no service found, return 404 status
  if (!service) {
    res.status(404).json({ message: "service not found." });
    return;
  }

  // If service found, return service details
  res.status(200).json(service);
}
