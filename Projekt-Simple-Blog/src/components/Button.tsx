import "../assets/css/button.css";

type ButtonProps = {
  children: React.ReactNode;
  onClick?: () => void;
  className?: string;
};

const Button = ({ children, onClick, className = "" }: ButtonProps) => {
  return (
    <button onClick={onClick} className={`button${className}`}>
      {children}
    </button>
  );
};

export default Button;
