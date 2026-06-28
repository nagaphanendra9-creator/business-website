export function formatCurrency(amount: number) {
  return `₹${amount.toLocaleString("en-IN")}`;
}

export function createWhatsAppLink(
  whatsappNumber: string,
  productName: string,
  price: string
) {
  const message = `Hi, I want to buy ${productName} (${price})`;

  return `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(
    message
  )}`;
}