import {
    // notFound,
    redirect
} from "next/navigation"

function getRandomInt(count: number){
    return Math.floor(Math.random() * count);
}

export default async function ReviewPage({ params }: { params: Promise<{ reviewId: string, productId: string }> }) {

    const random = getRandomInt(2);
    if(random === 1){
        throw new Error("Error loading!")
    }

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