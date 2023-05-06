import Link from "next/link";

export default function Home() {
  return (
    <>
      <header>
        <Link
          href={{
            pathname: "/post/[id]",
            query: {
              id: "abc-xyz",
            },
          }}
        >
          Post Link
        </Link>
      </header>
      <main>Hello NextJS</main>
    </>
  );
}
