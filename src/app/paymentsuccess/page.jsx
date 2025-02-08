'use client';
import Link from 'next/link';
import { useEffect } from 'react';

export default function PaymentSuccess() {
  useEffect(() => {
    // Add confetti animation when component mounts
    const confetti = document.querySelectorAll('.confetti');
    confetti.forEach((el, i) => {
      el.style.animationDelay = `${i * 0.2}s`;
    });
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 to-green-100 flex items-center justify-center px-4">
      <div className="max-w-md w-full bg-white rounded-2xl shadow-xl p-8 text-center relative overflow-hidden">
        {/* Confetti elements */}
        {[...Array(12)].map((_, i) => (
          <div
            key={i}
            className="confetti absolute w-2 h-2 bg-green-500 rounded-full"
            style={{
              left: `${Math.random() * 100}%`,
              animation: 'confetti-fall 3s ease-in-out infinite',
              opacity: 0
            }}
          />
        ))}
        
        {/* Success checkmark animation */}
        <div className="w-24 h-24 rounded-full bg-green-100 mx-auto mb-8 relative">
          <div className="absolute inset-0 flex items-center justify-center text-theme-green-300">
            <svg
              className="w-16 h-16 text-green-500 animate-check"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="3"
                d="M5 13l4 4L19 7"
                className="animate-draw"
              />
            </svg>
          </div>
        </div>

        <h1 className="text-3xl font-bold text-gray-800 mb-4 text-theme-green-300">
          Payment Successful!
        </h1>
        <p className="text-gray-600 mb-8">
          Thank you for your payment. Your transaction has been completed successfully.
        </p>
      </div>

      <style jsx>{`
        @keyframes confetti-fall {
          0% {
            transform: translateY(-100vh) rotate(0deg);
            opacity: 1;
          }
          100% {
            transform: translateY(100vh) rotate(360deg);
            opacity: 0;
          }
        }
        
        @keyframes draw {
          from {
            stroke-dashoffset: 100;
          }
          to {
            stroke-dashoffset: 0;
          }
        }

        .animate-draw {
          stroke-dasharray: 100;
          animation: draw 1s ease-in-out forwards;
        }

        .animate-check {
          animation: bounce 0.5s ease-in-out;
        }

        @keyframes bounce {
          0%, 100% {
            transform: scale(1);
          }
          50% {
            transform: scale(1.1);
          }
        }
      `}</style>
    </div>
  );
}
