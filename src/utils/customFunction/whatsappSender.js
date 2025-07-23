const phoneNumber = "918081221164";
const message = encodeURIComponent(
  "Hi, I’m interested in joining FGITO as a home chef. Could you please guide me through the next steps? Thank you!"
);
const whatsappUrl = `https://wa.me/${phoneNumber}?text=${message}`;
function openWhatsAppChat() {
  window.open(whatsappUrl, "_blank");
}
