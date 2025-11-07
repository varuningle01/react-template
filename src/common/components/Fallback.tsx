import React from "react";

interface FallbackProps {
  error: Error;
  resetErrorBoundary: () => void;
}

const Fallback: React.FC<FallbackProps> = ({ error, resetErrorBoundary }) => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-red-50 via-white to-orange-50 text-gray-800 px-6">
      <div className="bg-white border border-gray-200 shadow-lg rounded-2xl p-10 max-w-lg text-center space-y-6">
        <h1 className="text-3xl font-extrabold text-red-500">
          ⚠️ Something went wrong
        </h1>
        <p className="text-gray-600">
          We encountered an unexpected error. Please try refreshing the page or
          continue safely.
        </p>

        <details className="bg-gray-100 border border-gray-200 rounded-lg text-left p-3 text-sm text-gray-700 max-h-40 overflow-auto">
          <summary className="cursor-pointer text-gray-500 font-semibold">
            Error Details
          </summary>
          <pre className="whitespace-pre-wrap">{error.message}</pre>
        </details>

        <div className="flex justify-center gap-3">
          <button
            onClick={() => window.location.reload()}
            className="px-4 py-2 bg-red-500 hover:bg-red-600 text-white rounded-lg shadow transition-all"
          >
            Reload Page
          </button>
          <button
            onClick={resetErrorBoundary}
            className="px-4 py-2 bg-gray-200 hover:bg-gray-300 text-gray-800 rounded-lg shadow transition-all"
          >
            Try Again
          </button>
        </div>

        <p className="text-xs text-gray-400 pt-2">
          Built with ❤️ using React, TypeScript & TailwindCSS
        </p>
      </div>
    </div>
  );
};

export default Fallback;
