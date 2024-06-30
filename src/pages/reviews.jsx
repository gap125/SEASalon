import { useEffect, useState } from 'react';

const ReviewsPage = () => {
  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    async function fetchReviews() {
      try {
        const res = await fetch('/api/getReviews');
        if (!res.ok) {
          throw new Error('Failed to fetch reviews');
        }
        const data = await res.json();
        setReviews(data);
      } catch (error) {
        console.error('Failed to fetch reviews:', error);
      }
    }

    fetchReviews();
  }, []);

  return (
    <div className="max-w-3xl mx-auto">
      <div className='flex pt-4 mb-4'>
        <h1 className="flex items-center text-xl text-white font-bold">Customer Reviews</h1>
      </div>
      <div className="max-h-96 overflow-y-auto pr-6">
        {reviews.length === 0 ? (
          <p className="text-gray-600">No reviews yet.</p>
        ) : (
          <ul className=" divide-gray-200">
            {reviews.map((review) => (
              <li key={review.id} className="pb-2">
                <div className="bg-white shadow-md rounded-lg p-4">
                  <p className="text-md font-semibold">{review.customer_name}</p>
                  <p className="text-sm text-gray-600">Rating: {review.star_rating}/5</p>
                  <p className="text-sm">{review.comment}</p>
                </div>
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
};

export default ReviewsPage;
