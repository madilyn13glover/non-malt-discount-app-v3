export function Button({ type = "button", className, children, onClick }) {
  return (
    <button
      type={type}
      className={`px-4 py-2 rounded-md ${className}`}
      onClick={onClick}
    >
      {children}
    </button>
  );
}
