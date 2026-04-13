import Link from "next/link";

export default function Products() {

    const productId = 100;

    return (
        <>
            <Link href="/">Home</Link>
            <h1>products page</h1>
            <div>
                <Link href="/products/1">product 1</Link>
            </div>
            <div>
                <Link href="/products/2">product 2</Link>
            </div>
            <div>
                <Link href="/products/3" replace>product 3</Link> {/* replace: true -> replaces the current entry in the history stack instead of adding a new one */}
            </div>
            <div>
                <Link href="/products/4">product 4</Link>
            </div>
            <div>
                <Link href={`/products/${productId}`}>product {productId}</Link>
            </div>
        </>
    )
}
