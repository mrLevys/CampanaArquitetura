import "./Icons.css";

// eslint-disable-next-line react/prop-types
export default function Icon({ caminhoImg, caminhoHref }) {
  return (
    <a
      className="icon"
      href={caminhoHref}
      target="_blank"
      rel="noopener noreferrer"
    >
      <img src={caminhoImg} alt="Icon" width={24} height={24} />
    </a>
  );
}
