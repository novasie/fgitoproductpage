"use client";
import Link from "next/link";

export default function PaymentFailure() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-red-50 to-red-100 flex items-center justify-center px-4">
      <div className="max-w-md w-full bg-white rounded-2xl shadow-xl p-8 text-center relative">
        {/* Error icon animation */}
        <div className="w-24 h-24 rounded-full bg-red-100 mx-auto mb-8 relative">
          <div className="absolute inset-0 flex items-center justify-center text-theme-red-200">
            <svg
              className="w-16 h-16 text-red-500 animate-error"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"
                className="animate-draw-error"
              />
            </svg>
          </div>
        </div>

        <h1 className="text-3xl font-bold text-gray-800 mb-4 text-theme-red-200">
          Payment Failed
        </h1>
        <p className="text-gray-600 mb-8">
          We're sorry, but your payment could not be processed. Please try again
          or contact support if the problem persists.
        </p>
      </div>

      <style jsx>{`
        @keyframes draw-error {
          from {
            stroke-dashoffset: 100;
          }
          to {
            stroke-dashoffset: 0;
          }
        }

        .animate-draw-error {
          stroke-dasharray: 100;
          animation: draw-error 1s ease-in-out forwards;
        }

        .animate-error {
          animation: shake 0.5s ease-in-out;
        }

        @keyframes shake {
          0%,
          100% {
            transform: translateX(0);
          }
          25% {
            transform: translateX(-4px);
          }
          75% {
            transform: translateX(4px);
          }
        }
      `}</style>
    </div>
  );
}
