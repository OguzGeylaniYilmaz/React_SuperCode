import React from "react";

interface ButtonProps {
  children: React.ReactNode;
  onClick?: () => void;
  className?: string;
}

const Button: React.FC<ButtonProps> = ({
  children,
  onClick,
  className = "",
}) => {
  return (
    <button
      onClick={onClick}
      className={`bg-yellow-300 hover:bg-yellow-400 px-4 py-2 rounded-full text-sm font-medium transition-colors ${className}`}
    >
      {children}
    </button>
  );
};

export default Button;
