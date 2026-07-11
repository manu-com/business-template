const backgrounds = {
  white: "bg-white dark:bg-gray-900",
  light: "bg-slate-50 dark:bg-gray-800/50",
  dark: "bg-gray-900 dark:bg-gray-950",
};

export default function Section({
  id,
  children,
  className = "",
  background = "white",
}) {
  return (
    <section
      id={id}
      className={`py-16 sm:py-24 lg:py-32 ${backgrounds[background]} ${className}`}
    >
      {children}
    </section>
  );
}
