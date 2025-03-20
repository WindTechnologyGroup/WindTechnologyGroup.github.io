import Link from "next/link";

export default function Logo() {
  return (
    <Link href="/" className="inline-flex" aria-label="WTG">
    <div className="spinner">
        <div className="blade"></div>
    </div>

    </Link>
  );
}
