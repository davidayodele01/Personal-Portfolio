import React from "react";

export const Button = ({
  children,
  variant = "primary",
  size = "md",
  isLoading = false,
  disabled = false,
  fullWidth = false,
  leftIcon,
  rightIcon,
  type = "button",
  className = "",
  onClick,
  ...props
}) => {
  // Base classes for focus, accessibility, layout, and smooth transitions
  const baseClasses =
    "inline-flex items-center justify-center font-medium rounded-lg transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed select-none";

  // Visual variants
  const variants = {
    primary:
      "bg-emerald-600 hover:bg-emerald-500 text-white focus:ring-emerald-500 shadow-sm active:bg-emerald-700",
    secondary:
      "bg-slate-800 hover:bg-slate-700 text-slate-100 focus:ring-slate-600 border border-slate-700 shadow-sm active:bg-slate-900",
    outline:
      "border border-slate-600 text-slate-300 hover:bg-slate-800 hover:text-white focus:ring-slate-500",
    danger:
      "bg-red-600 hover:bg-red-500 text-white focus:ring-red-500 shadow-sm active:bg-red-700",
    ghost:
      "text-slate-300 hover:bg-slate-800/60 hover:text-white focus:ring-slate-500",
  };

  // Size variations
  const sizes = {
    sm: "px-3 py-1.5 text-xs gap-1.5",
    md: "px-4 py-2 text-sm gap-2",
    lg: "px-6 py-3 text-base gap-2.5",
  };

  const widthClass = fullWidth ? "w-full" : "";

  // Combine default classes with any custom className overrides
  const combinedClasses =
    `${baseClasses} ${variants[variant] || variants.primary} ${sizes[size] || sizes.md} ${widthClass} ${className}`.trim();

  return (
    <button
      type={type}
      disabled={disabled || isLoading}
      onClick={onClick}
      className={combinedClasses}
      {...props}
    >
      {/* Loading Spinner */}
      {isLoading ? (
        <svg
          className="animate-spin -ml-1 h-4 w-4 text-current"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
        >
          <circle
            className="opacity-25"
            cx="12"
            cy="12"
            r="10"
            stroke="currentColor"
            strokeWidth="4"
          />
          <path
            className="opacity-75"
            fill="currentColor"
            d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
          />
        </svg>
      ) : (
        leftIcon
      )}

      {/* Button Text / Content */}
      <span>{children}</span>

      {/* Optional Right Icon */}
      {!isLoading && rightIcon}
    </button>
  );
};

export default Button;
