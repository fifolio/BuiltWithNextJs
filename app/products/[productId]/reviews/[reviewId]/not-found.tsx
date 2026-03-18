"use client";

import { usePathname } from "next/navigation";

export default function NotFound() {

    const pathname = usePathname();
    const productId = pathname.split("/")[2];
    const reviewId = pathname.split("/")[4];

    return (
        <div>
            <h1>Review Not Found</h1>
            <p>Review with ID {reviewId} for product {productId} was not found.</p>
        </div>
    )
}
