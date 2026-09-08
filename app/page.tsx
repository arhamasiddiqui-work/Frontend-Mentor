import Link from "next/link";

export default function Home() {
  return (
    <div className="flex flex-col gap-2 p-5">
      <Link href="/frontend-mentor/qr-code-component">QR code component</Link>
      <Link href="/frontend-mentor/blog-preview-card">Blog preview card</Link>
      <Link href="/frontend-mentor/social-links-profile">
        Social links profile
      </Link>
      <Link href="/frontend-mentor/results-summary-component">
        Results summary
      </Link>
      <Link href="/frontend-mentor/stats-preview-card-component">
        Stats preview card
      </Link>
      <Link href="/frontend-mentor/3column-preview-card-component">
        3 column preview card component
      </Link>
      <Link href="/frontend-mentor/hotel-booking-confirmation-page">
        Hotel booking confirmation page
      </Link>
      <Link href="/frontend-mentor/social-proof-section">
        Social proof section
      </Link>
      <Link href="/frontend-mentor/bento-grid">Bento grid</Link>
      <Link href="/frontend-mentor/four-card-feature-section">
        Four card feature section
      </Link>
      <Link href="/frontend-mentor/grid-landing-page">Grid landing page</Link>
      <Link href="/frontend-mentor/base-apparel-coming-soon-page">
        Base apparel Page
      </Link>
      <Link href="/frontend-mentor/article-preview-component">
        Article preview component
      </Link>
      <Link href="/frontend-mentor/interactive-rating-component">
        Interactive rating component
      </Link>
      <Link href="/frontend-mentor/testimonial-grid-section">
        Testimonial grid section
      </Link>
    </div>

    // <div className="bg-[#F7F4ED] h-screen">
    //   <MainMediumHeader />
    //   <MediumMain />
    //   <MainMediumFooter />
    // </div>
  );
}
