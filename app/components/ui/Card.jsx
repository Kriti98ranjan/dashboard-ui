export default function Card({
  title,
  children,
  className = "",
}) {
  return (
    <div
      className={`rounded-lg text-black p-4 flex flex-col justify-between min-h-27.5 ${className}`}
    >
      <p className="font-semibold text-base">{title}</p>

      <div>{children}</div>
    </div>
  );
}