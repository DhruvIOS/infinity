const Button = ({ children, className = "", ...props }) => {
    return (
      <button
        className={`bg-[#FF3366] text-white px-4 py-2 rounded-lg shadow-md hover:bg-[#e62e5c] transition ${className}`}
        {...props}
      >
        {children}
      </button>
    );
  };
  
  export default Button;
  