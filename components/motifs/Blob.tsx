export default function Blob({
  className = "",
  style,
}: {
  className?: string;
  style?: React.CSSProperties;
}) {
  return (
    <svg viewBox="0 0 200 200" className={className} style={style} aria-hidden>
      <path
        fill="currentColor"
        d="M45.8,-58.6C58.8,-49.9,68.4,-35.1,72.4,-18.9C76.4,-2.7,74.9,15,67.3,29.6C59.7,44.3,46.1,55.9,30.7,63.4C15.3,70.9,-1.9,74.3,-18.7,71.1C-35.6,68,-52.1,58.3,-62.6,44.2C-73.1,30.1,-77.5,11.6,-74.8,-5.5C-72.1,-22.6,-62.2,-38.3,-48.8,-47.4C-35.4,-56.5,-17.7,-59,0.5,-59.6C18.7,-60.3,32.8,-67.3,45.8,-58.6Z"
        transform="translate(100 100)"
      />
    </svg>
  );
}
