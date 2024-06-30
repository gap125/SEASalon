import { useState, useEffect } from 'react';
import Head from 'next/head';
import ReviewsPage from './reviews';

const Form = () => {
  const [reviews, setReviews] = useState([]);
  const [customerName, setCustomerName] = useState('');
  const [starRating, setStarRating] = useState(1);
  const [comment, setComment] = useState('');

  useEffect(() => {
    async function fetchReviews() {
      try {
        const res = await fetch('/api/reviews');
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

  const handleSubmit = async (e) => {
    e.preventDefault();
    const review = { customerName, starRating, comment };

    try {
      const res = await fetch('/api/reviews', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(review),
      });

      if (!res.ok) {
        throw new Error('Failed to submit review');
      }

      const newReview = await res.json();
      setReviews([...reviews, newReview]);

      // Reset form fields
      setCustomerName('');
      setStarRating(1);
      setComment('');
    } catch (error) {
      console.error('Failed to submit review:', error);
    }
  };

  return (
    <div>
      <Head>
        <title>Customer Review System - Next.js</title>
        <meta name="description" content="Customer review system using Next.js and Tailwind CSS" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="bg-[#6b4a1c] h-[600px] p-6">
        <h1 className="text-4xl font-bold text-center text-white">Customer Review System</h1>

        <div className="max-w-6xl mx-auto flex flex-row">
          <form onSubmit={handleSubmit} className="w-[60%] h-auto mx-auto mt-8 p-4 bg-white shadow-md rounded-lg">
            <h2 className="text-xl font-bold mb-4">Leave a Review</h2>

            <div className="mb-4">
              <label htmlFor="customerName" className="block text-sm font-medium text-gray-700">
                Your Name
              </label>
              <input
                type="text"
                id="customerName"
                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                placeholder="Enter your name"
                value={customerName}
                onChange={(e) => setCustomerName(e.target.value)}
                required
              />
            </div>

            <div className="mb-4">
              <label htmlFor="starRating" className="block text-sm font-medium text-gray-700">
                Star Rating
              </label>
              <select
                id="starRating"
                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                value={starRating}
                onChange={(e) => setStarRating(parseInt(e.target.value))}
                required
              >
                {[1, 2, 3, 4, 5].map((rating) => (
                  <option key={rating} value={rating}>
                    {rating}
                  </option>
                ))}
              </select>
            </div>

            <div className="mb-4">
              <label htmlFor="comment" className="block text-sm font-medium text-gray-700">
                Comment
              </label>
              <textarea
                id="comment"
                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                placeholder="Leave your comment"
                value={comment}
                onChange={(e) => setComment(e.target.value)}
                required
              />
            </div>

            <div className="text-right">
              <button
                type="submit"
                className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
              >
                Submit Review
              </button>
            </div>
          </form>

          <div className="mt-8 w-[30%]">
            <ReviewsPage></ReviewsPage>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Form;
