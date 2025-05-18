import { notFound } from "next/navigation";

export default async function ReviewPage({ params }) {
  const { id, reviewId } = await params;

  if(reviewId > 4) {
    notFound()
  } 
  return (
    <div>
      <h1>
        Product {id} and Review Id: {reviewId}
      </h1>
    </div>
  );
}
