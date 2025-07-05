"use client";
import { useEffect, useState } from "react";
import NavBar from "../components/NavBar";
import Footer from "../components/Footer";

export default function Reviews() {
  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/api/contact")
      .then((res) => res.json())
      .then(setReviews);
  }, []);

  return (
    <>
      <NavBar />
      <main className="p-8">
        <h2 className="text-2xl mb-4">Reviews</h2>
        <ul>
          {reviews.map((r) => (
            <li key={r._id} className="border p-2 my-2">{r.message}</li>
          ))}
        </ul>
      </main>
      <Footer />
    </>
  );
}
