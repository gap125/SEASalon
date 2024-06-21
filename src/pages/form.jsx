import { useState } from 'react';
import Head from 'next/head';

const Form = () => {
  const [reviews, setReviews] = useState([]);
  const [customerName, setCustomerName] = useState('');
  const [starRating, setStarRating] = useState(1);
  const [comment, setComment] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Validate form data (optional)

    // Create review object
    const review = {
      customerName,
      starRating,
      comment
    };

    // Add review to state
    setReviews([...reviews, review]);

    // Reset form fields
    setCustomerName('');
    setStarRating(1);
    setComment('');
  };

  return (
    <div>
      <Head>
        <title>Customer Review System - Next.js</title>
        <meta name="description" content="Customer review system using Next.js and Tailwind CSS" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="bg-[#6b4a1c] h-[600px] p-6">
        <h1 className="text-4xl font-semibold text-center mb-4 text-white">Customer Review System</h1>

        <div className="max-w-6xl mx-auto flex flex-row">
          <form onSubmit={handleSubmit} className="w-[60%] mx-auto mt-8 p-4 bg-white shadow-md rounded-lg">
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
                  <option key={rating} value={rating}>{rating}</option>
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
              <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600">
                Submit Review
              </button>
            </div>
          </form>

          <div className="mt-8 w-[30%]">
            <h2 className="text-xl font-bold mb-4 text-white">Reviews</h2>
            {reviews.length === 0 && <p>No reviews yet.</p>}
            {reviews.map((review, index) => (
              <div key={index} className="bg-white rounded-lg shadow-md p-4 mb-4">
                <p className="font-bold">{review.customerName}</p>
                <p>Rating: {review.starRating}/5</p>
                <p>{review.comment}</p>
              </div>
            ))}
          </div>
        </div>
      </main>
    </div>
  );
};

export default Form;
