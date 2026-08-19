"use client";

import { Star } from "lucide-react";

interface Review {
  name: string;
  service: string;
  location?: string;
  review: string;
}

const reviews: Review[] = [
  {
    name: "Ananya",
    service: "Housekeeping",
    location: "Bengaluru",
    review:
      "The housekeeping service has made our daily routine so much easier. The professional was punctual, polite and did an excellent job.",
  },
  {
    name: "Rahul",
    service: "Cooking",
    location: "Bengaluru",
    review:
      "We needed regular cooking support at home and Relyn made the process very simple. The service has been reliable and convenient.",
  },
  {
    name: "Priya",
    service: "Child Care",
    location: "Bengaluru",
    review:
      "Finding dependable child care was important for our family. Relyn connected us with someone caring, responsible and trustworthy.",
  },
  {
    name: "Karthik",
    service: "Elder Care",
    location: "Bengaluru",
    review:
      "The elder care support has given our family great peace of mind. The caregiver is kind, attentive and dependable.",
  },
  {
    name: "Sneha",
    service: "Housekeeping",
    location: "Bengaluru",
    review:
      "The service quality has been excellent. Everything from booking to the actual service was smooth and professional.",
  },
  {
    name: "Vikram",
    service: "Home Support",
    location: "Bengaluru",
    review:
      "Relyn has made it much easier to manage everyday tasks at home. The service is convenient, professional and reliable.",
  },
];

function ReviewCard({ review }: { review: Review }) {
  return (
    <div className="w-[310px] shrink-0 rounded-2xl border border-[#dcebd8] bg-white p-6 shadow-xs transition-all duration-300 hover:-translate-y-1 hover:border-[#064e3b]/30 hover:shadow-md md:w-[380px]">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-[#DBF5D6] text-base font-bold text-[#064e3b] ring-2 ring-white">
            {review.name.charAt(0)}
          </div>
          <div>
            <h3 className="font-[var(--font-figtree)] text-sm font-bold text-[#064e3b]">
              {review.name}
            </h3>
            <p className="text-xs text-[#71806f]">
              {review.service} {review.location && `• ${review.location}`}
            </p>
          </div>
        </div>
        <div className="flex gap-0.5 text-[#e85d04]">
          {[...Array(5)].map((_, i) => (
            <Star key={i} size={14} className="fill-[#e85d04] text-[#e85d04]" />
          ))}
        </div>
      </div>
      <p className="mt-4 text-xs leading-relaxed text-[#59655a] sm:text-sm">
        &quot;{review.review}&quot;
      </p>
    </div>
  );
}

export default function Reviews() {
  const rowOne = [...reviews, ...reviews];
  const rowTwo = [...reviews.slice().reverse(), ...reviews.slice().reverse()];

  return (
    <section className="relative overflow-hidden bg-[#F7F0D4] py-20 md:py-28">
      <div className="mx-auto max-w-7xl px-6 text-center">
        <span className="inline-block rounded-full bg-[#064e3b]/10 px-3.5 py-1 text-xs font-bold uppercase tracking-[0.25em] text-[#e85d04]">
          Family Stories
        </span>
        <h2 className="mt-4 font-[var(--font-syne)] text-3xl font-semibold tracking-tight text-[#064e3b] sm:text-4xl md:text-5xl">
          Loved by families
        </h2>
        <p className="mx-auto mt-4 max-w-2xl text-sm leading-relaxed text-[#687366] sm:text-base md:text-lg">
          Real experiences from families who trust Relyn to take care of everyday needs at home.
        </p>
      </div>

      <div className="relative mt-12 space-y-6 md:mt-16">
        <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-16 bg-gradient-to-r from-[#F7F0D4] to-transparent md:w-32" />
        <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-16 bg-gradient-to-l from-[#F7F0D4] to-transparent md:w-32" />

        <div className="review-slider">
          <div className="review-track review-left">
            {rowOne.map((review, index) => (
              <ReviewCard key={`row-one-${index}`} review={review} />
            ))}
          </div>
        </div>

        <div className="review-slider">
          <div className="review-track review-right">
            {rowTwo.map((review, index) => (
              <ReviewCard key={`row-two-${index}`} review={review} />
            ))}
          </div>
        </div>
      </div>

      <style jsx>{`
        .review-slider {
          width: 100%;
          overflow: hidden;
        }
        .review-track {
          display: flex;
          width: max-content;
          gap: 20px;
          will-change: transform;
        }
        .review-left {
          animation: scrollLeft 45s linear infinite;
        }
        .review-right {
          animation: scrollRight 45s linear infinite;
        }
        .review-slider:hover .review-track {
          animation-play-state: paused;
        }
        @keyframes scrollLeft {
          from {
            transform: translateX(0);
          }
          to {
            transform: translateX(-50%);
          }
        }
        @keyframes scrollRight {
          from {
            transform: translateX(-50%);
          }
          to {
            transform: translateX(0);
          }
        }
        @media (max-width: 768px) {
          .review-left,
          .review-right {
            animation-duration: 30s;
          }
        }
        @media (prefers-reduced-motion: reduce) {
          .review-left,
          .review-right {
            animation: none;
          }
        }
      `}</style>
    </section>
  );
}