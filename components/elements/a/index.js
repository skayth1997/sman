import Link from "next/link";
export default function A ({ text, href }) {
  return (
    <Link href={href}>
      <a>{text}</a>
    </Link>
  );
}
