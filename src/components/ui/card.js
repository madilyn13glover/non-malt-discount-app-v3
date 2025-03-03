export function Card({ children, className }) {
    return <div className={`rounded-lg shadow-md p-4 border ${className}`}>{children}</div>;
  }
  
  export function CardContent({ children }) {
    return <div className="p-4">{children}</div>;
  }