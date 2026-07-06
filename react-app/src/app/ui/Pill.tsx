export function Pill({
  label,
  color,
  textColor = '#FFFFFF',
}: {
  label: string;
  color: string;
  textColor?: string;
}) {
  return (
    <span
      className="inline-flex items-center whitespace-nowrap rounded-full px-2.5 py-0.5 text-[11px] font-semibold"
      style={{ backgroundColor: color, color: textColor }}
    >
      {label}
    </span>
  );
}
