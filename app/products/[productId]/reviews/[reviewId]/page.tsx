export default async function ReviewPage({ params }: { params: Promise<{ reviewId: string, productId: string }> }) {
    const { reviewId, productId } = await params
    return (
        <div>
            <h1>Review {reviewId} for product {productId}</h1>
        </div>
    )
}