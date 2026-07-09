const variants = {
  primary:
    "bg-blue-600 text-white hover:bg-blue-700 active:bg-blue-800",
  secondary:
    "bg-slate-50 text-slate-800 hover:bg-slate-100 active:bg-slate-200",
  ghost:
    "bg-transparent text-slate-800 hover:bg-slate-100 active:bg-slate-200",
  outline:
    "bg-transparent text-slate-800 border border-gray-200 hover:bg-slate-50 active:bg-slate-100",
};

const sizes = {
  small: "px-4 py-2 text-sm",
  medium: "px-6 py-3 text-base",
  large: "px-8 py-4 text-lg",
};

export default function Button({
  children,
  variant = "primary",
  size = "medium",
  className = "",
  disabled = false,
  href,
  ...props
}) {
  const classes = `inline-flex items-center justify-center rounded-lg font-medium transition-colors duration-200 ease-in-out focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed ${variants[variant]} ${sizes[size]} ${className}`;

  if (href) {
    return (
      <a
        className={classes}
        href={href}
        aria-disabled={disabled || undefined}
        tabIndex={disabled ? -1 : undefined}
        {...props}
      >
        {children}
      </a>
    );
  }

  return (
    <button
      className={classes}
      disabled={disabled}
      {...props}
    >
      {children}
    </button>
  );
}
