import { useInView } from "../../../hooks";
import "./Reveal.css";

export function Reveal({ children, delay = 0, style = {} }) {
  const [ref, isVisible] = useInView();

  const classes = ["reveal", isVisible && "reveal--visible"]
    .filter(Boolean)
    .join(" ");

  return (
    <div
      ref={ref}
      className={classes}
      style={{
        transitionDelay: `${delay}s`,
        ...style,
      }}
    >
      {children}
    </div>
  );
}
