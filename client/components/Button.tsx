import { motion, MotionProps } from "framer-motion";
import { ReactNode } from "react";

interface ButtonProps extends MotionProps {
  children: ReactNode;
  variant?: "primary" | "secondary" | "outline";
  size?: "sm" | "md" | "lg";
  onClick?: () => void;
  className?: string;
  type?: "button" | "submit" | "reset";
  disabled?: boolean;
  href?: string;
}

export default function Button({
  children,
  variant = "primary",
  size = "md",
  onClick,
  className = "",
  type = "button",
  disabled = false,
  href,
  ...motionProps
}: ButtonProps) {
  const baseClasses =
    "font-semibold rounded-lg transition-all duration-300 flex items-center justify-center gap-2";

  const variants = {
    primary: "bg-gradient-to-r from-btc-teal to-emerald-600 hover:from-emerald-600 hover:to-emerald-700 text-white shadow-lg hover:shadow-2xl hover:shadow-btc-teal/40",
    secondary: "bg-gradient-to-r from-btc-accent to-sky-600 hover:from-sky-600 hover:to-sky-700 text-white shadow-lg hover:shadow-2xl hover:shadow-btc-accent/40",
    outline:
      "border-2 border-btc-teal text-btc-teal dark:text-btc-teal hover:bg-btc-teal/10 hover:border-btc-teal hover:shadow-lg hover:shadow-btc-teal/20",
  };

  const sizes = {
    sm: "px-4 py-2 text-sm",
    md: "px-6 py-3 text-base",
    lg: "px-8 py-4 text-lg",
  };

  const combinedClasses = `${baseClasses} ${variants[variant]} ${sizes[size]} ${className} ${
    disabled ? "opacity-50 cursor-not-allowed" : ""
  }`;

  if (href) {
    return (
      <motion.a
        href={href}
        whileHover={{ scale: 1.02 }}
        whileTap={{ scale: 0.98 }}
        className={combinedClasses}
        {...motionProps}
      >
        {children}
      </motion.a>
    );
  }

  return (
    <motion.button
      type={type}
      onClick={onClick}
      disabled={disabled}
      whileHover={!disabled ? { scale: 1.02 } : {}}
      whileTap={!disabled ? { scale: 0.98 } : {}}
      className={combinedClasses}
      {...motionProps}
    >
      {children}
    </motion.button>
  );
}
