import Link from "next/link";

export default function Home() {
  return (
    <div>
      <h1>Hello World!</h1>
      <Link href="/instagram" className="font-bold">
        Instagram
      </Link>
    </div>
  );
}
