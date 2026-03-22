import {
    // notFound,
    redirect
} from "next/navigation"

export default async function ReviewPage({ params }: { params: Promise<{ reviewId: string, productId: string }> }) {
    const { reviewId, productId } = await params
    if (parseInt(reviewId) > 1000) {
        // notFound();
        redirect("/products")
    }
    return (
        <div>
            <h1>Review {reviewId} for product {productId}</h1>
        </div>
    )
}