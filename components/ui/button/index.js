import Link from "next/link";
import classes from "./button.module.css";

export default function Button({ link, children, onclick }) {
  if (link) {
    return (
      <Link className={classes.btn} href={link}>
        {children}
      </Link>
    );
  }
  return (
    <button className={classes.btn} onClick={onclick}>
      {children}
    </button>
  );
}
