import { FaWhatsapp } from "react-icons/fa";

interface WhatsAppButtonProps {
  phoneNumber: string;
  message: string;
}

export default function WhatsAppButton({
  phoneNumber,
  message,
}: WhatsAppButtonProps) {
  const handleClick = () => {
    const encodedMessage = encodeURIComponent(message);
    window.open(
      `https://wa.me/${phoneNumber}?text=${encodedMessage}`,
      "_blank",
    );
  };

  return (
    <button
      onClick={handleClick}
      className="fixed bottom-8 right-8 bg-green-500 text-white rounded-full p-4 shadow-xl hover:bg-green-600 hover:shadow-2xl hover:scale-105 transition-all duration-300 z-50"
      aria-label="Chat on WhatsApp"
    >
      <FaWhatsapp className="w-7 h-7" />
      <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs font-bold rounded-full h-5 w-5 flex items-center justify-center animate-bounce">
        1
      </span>
    </button>
  );
}
