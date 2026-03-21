import Link from "next/link";


export default function Home() {
  return (
    <>
      <div>Welcome Home!</div>
      <Link href="/blog">Go to Blog Page</Link>
      <br />
      <Link href="/products">Go to Products Page</Link>
    </>
  )
}