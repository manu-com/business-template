const backgrounds = {
  white: "bg-white",
  light: "bg-slate-50",
  dark: "bg-gray-900",
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
