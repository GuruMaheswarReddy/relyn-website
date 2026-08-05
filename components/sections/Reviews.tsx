"use client";

const reviews = [
  {
    name: "Arjun Mehta",
    company: "Founder, Mehta Enterprises",
    tag: "Website Development",
    review:
      "The team completely transformed our website. The new design is modern, fast, responsive and much easier for our customers to use.",
  },
  {
    name: "Priya Sharma",
    company: "Marketing Manager",
    tag: "SEO",
    review:
      "Our search visibility improved significantly after working with the team. We are now getting better organic traffic and quality enquiries.",
  },
  {
    name: "Rahul Verma",
    company: "Founder, RV Solutions",
    tag: "Digital Marketing",
    review:
      "Their digital marketing strategy helped us reach the right audience and generate more qualified leads for our business.",
  },
  {
    name: "Sneha Reddy",
    company: "E-commerce Business Owner",
    tag: "Shopify Development",
    review:
      "They built a clean and professional Shopify store for our brand. The website is fast, mobile-friendly and easy for our team to manage.",
  },
  {
    name: "Karthik Rao",
    company: "Director, KR Technologies",
    tag: "UI/UX Design",
    review:
      "The UI/UX work exceeded our expectations. Every screen feels clean, intuitive and consistent with our brand identity.",
  },
  {
    name: "Ananya Patel",
    company: "Founder, Urban Living",
    tag: "E-commerce",
    review:
      "From design to development, the entire process was smooth. Our new e-commerce website looks premium and performs extremely well.",
  },
  {
    name: "Vikram Singh",
    company: "Business Owner",
    tag: "Web Development",
    review:
      "Excellent communication and technical execution. They understood our requirements and delivered a professional website on time.",
  },
  {
    name: "Neha Gupta",
    company: "Marketing Head",
    tag: "SEO & Marketing",
    review:
      "The combination of SEO and digital marketing has helped our business improve online visibility and generate consistent enquiries.",
  },
];

function ReviewCard({
  review,
}: {
  review: (typeof reviews)[number];
}) {
  return (
    <div className="w-[360px] md:w-[420px] shrink-0 rounded-2xl border border-slate-200 bg-white p-7 shadow-sm">

      {/* Client + Service */}
      <div className="flex items-start justify-between gap-4">
        <div className="flex items-center gap-3">

          {/* Avatar */}
          <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-[#0038A8] text-sm font-semibold text-white">
            {review.name
              .split(" ")
              .map((word) => word[0])
              .join("")}
          </div>

          <div>
            <h3 className="font-semibold text-slate-900">
              {review.name}
            </h3>

            <p className="mt-0.5 text-xs text-slate-500">
              {review.company}
            </p>
          </div>
        </div>

        <span className="whitespace-nowrap rounded-full border border-[#0038A8]/20 bg-[#0038A8]/5 px-3 py-1 text-xs font-medium text-[#0038A8]">
          {review.tag}
        </span>
      </div>

      {/* Stars */}
      <div className="mt-6 flex gap-1 text-lg text-[#FF6600]">
        ★★★★★
      </div>

      {/* Review */}
      <p className="mt-4 text-[15px] leading-7 text-slate-600">
        &quot;{review.review}&quot;
      </p>
    </div>
  );
}

export default function Reviews() {
  const rowOne = [...reviews, ...reviews];
  const rowTwo = [...reviews.slice().reverse(), ...reviews.slice().reverse()];

  return (
    <section className="overflow-hidden bg-white py-24">

      {/* Heading */}
      <div className="mx-auto max-w-7xl px-6 text-center">

        <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#FF6600]">
          Client Stories
        </p>

        <h2 className="mt-5 text-4xl font-semibold tracking-tight text-slate-900 md:text-6xl">
          Trusted by businesses that
          <span className="text-[#0038A8]"> grow with us</span>
        </h2>

        <p className="mx-auto mt-5 max-w-2xl text-lg leading-8 text-slate-500">
          Real experiences from businesses we&apos;ve helped through
          web development, SEO, design and digital marketing.
        </p>

        {/* Rating */}
        <div className="mt-8 flex flex-wrap items-center justify-center gap-5 text-sm">

          <div className="text-lg text-[#FF6600]">
            ★★★★★
          </div>

          <strong className="text-slate-900">
            4.9 / 5
          </strong>

          <span className="h-5 w-px bg-slate-200" />

          <span className="text-slate-500">
            100+ successful projects
          </span>

          <span className="h-5 w-px bg-slate-200" />

          <span className="text-slate-500">
            98% client satisfaction
          </span>
        </div>
      </div>


      {/* Reviews */}
      <div className="mt-16 space-y-6">

        {/* ROW 1 - LEFT */}
        <div className="review-slider">
          <div className="review-track review-left">
            {rowOne.map((review, index) => (
              <ReviewCard
                key={`first-${index}`}
                review={review}
              />
            ))}
          </div>
        </div>


        {/* ROW 2 - RIGHT */}
        <div className="review-slider">
          <div className="review-track review-right">
            {rowTwo.map((review, index) => (
              <ReviewCard
                key={`second-${index}`}
                review={review}
              />
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
          gap: 24px;
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
            animation-duration: 35s;
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