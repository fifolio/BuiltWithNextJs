import Link from "next/link";


export default function Home() {
  return (
    <>
      <div>Welcome Home!</div>
      <Link href="/blog">Go to Blog Page</Link>
      <br />
      <Link href="/products">Go to Products Page</Link>
      <br />
      <Link href="/articles/breaking-news-123?lang=en">Read in English</Link>
      <Link href="/articles/breaking-news-123?lang=fr">Read in French</Link>
    </>
  )
}