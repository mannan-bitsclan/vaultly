import logoImg from "../../../assets/logo.png";
import "./Logo.css";

export function Logo({ dark = false, compact = false }) {
  const containerClasses = [
    "logo",
    "d-flex",
    "align-items-center",
    compact && "logo--compact",
  ]
    .filter(Boolean)
    .join(" ");

  const imageClasses = [
    "logo__image",
    compact && "logo__image--compact",
  ]
    .filter(Boolean)
    .join(" ");

  const textClasses = [
    "logo__text",
    compact && "logo__text--compact",
    dark && "logo__text--dark",
  ]
    .filter(Boolean)
    .join(" ");

  return (
    <div className={containerClasses}>
      <img src={logoImg} alt="Vaultly" className={imageClasses} />
      <span className={textClasses}>Vaultly</span>
    </div>
  );
}
