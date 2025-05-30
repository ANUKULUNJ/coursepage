export function ErrorPopup({ message, onClose }) {
  if (!message) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50 animate-fade-in">
      <div className="bg-white rounded-lg shadow-lg p-6 w-full max-w-sm mx-4 animate-scale-in">
        <div className="flex items-center mb-4">
          <div className="w-10 h-10 rounded-full bg-red-100 flex items-center justify-center mr-4">
            <svg className="w-6 h-6 text-red-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </div>
          <h3 className="text-lg font-semibold text-[#232636]">Error</h3>
        </div>
        <p className="text-[#676767] mb-6">{message}</p>
        <div className="flex justify-end">
          <button
            onClick={onClose}
            className="px-4 py-2 bg-blue-800 text-white rounded hover:bg-[#143d65] transition-colors"
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
}

// New component for inline error messages that can appear above input fields
export function InlineError({ message, className = "" }) {
  if (!message) return null;
  
  return (
    <div className={`flex items-center text-red-500 text-sm mt-1 mb-2 ${className}`}>
      <svg 
        className="w-4 h-4 mr-1 flex-shrink-0" 
        fill="currentColor" 
        viewBox="0 0 20 20"
      >
        <path 
          fillRule="evenodd" 
          d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z" 
          clipRule="evenodd" 
        />
      </svg>
      <span>{message}</span>
    </div>
  );
}