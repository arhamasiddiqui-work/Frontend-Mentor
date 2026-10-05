"use client";
import Link from "next/link";

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-slate-900 p-7 text-white md:p-15">
      <div className="flex flex-col items-center gap-10">
        <div className="flex flex-col items-center justify-between gap-10 md:flex-row md:gap-20">
          <div className="flex flex-col items-center gap-2 text-center">
            <p className="text-4xl font-bold sm:text-5xl">
              Frontend-Mentor (clone)
            </p>

            <p className="text-xl font-bold">
              <span> Made by:</span>
              &nbsp;
              <span className="font-semibold italic">Arhama Siddiqui</span>
            </p>
          </div>
        </div>
        <div className="flex flex-col gap-7 text-center text-xl *:cursor-pointer *:rounded-2xl *:bg-linear-to-tr *:from-violet-500 *:to-fuchsia-500 *:p-3 *:font-semibold *:text-white *:transition *:duration-500 *:hover:bg-linear-to-r *:hover:from-fuchsia-500 *:hover:to-pink-500 md:grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 *:items-center *:flex *:justify-center">
          <Link href="/frontend-mentor/qr-code-component">
            QR code component
          </Link>
          <Link href="/frontend-mentor/blog-preview-card">
            Blog preview card
          </Link>
          <Link href="/frontend-mentor/social-links-profile">
            Social links profile
          </Link>
          <Link href="/frontend-mentor/3column-preview-card-component">
            3 column preview card component
          </Link>
          <Link href="/frontend-mentor/results-summary-component">
            Results summary
          </Link>
          <Link href="/frontend-mentor/stats-preview-card-component">
            Stats preview card
          </Link>

          <Link href="/frontend-mentor/hotel-booking-confirmation-page">
            Hotel booking confirmation page
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
          <Link href="/frontend-mentor/social-proof-section">
            Social proof section
          </Link>
          <Link href="/frontend-mentor/bento-grid">Bento grid</Link>
          <Link href="/frontend-mentor/four-card-feature-section">
            Four card feature section
          </Link>
          <Link href="/frontend-mentor/grid-landing-page">
            Grid landing page
          </Link>
          <Link href="/frontend-mentor/base-apparel-coming-soon-page">
            Base apparel Page
          </Link>
          <Link href="/frontend-mentor/fylo-dark-theme-landing-page">
            Fylo Page
          </Link>
          <Link href="/frontend-mentor/agency-landing-page">Agency Page </Link>
          <Link href="/frontend-mentor/intro-component-with-signup-form">
            Intro Component with signup form
          </Link>
          <Link href="/frontend-mentor/news-homepage">News Homepage</Link>
          <Link href="/frontend-mentor//loopstudios-landing-page">
            Loop Studios
          </Link>
          <Link href="/frontend-mentor/newsletter-signup-form-with-success-message">
            Newsletter
          </Link>
          <Link href="/frontend-mentor/sign-up-screen">Sign up screens</Link>
          <Link href="/frontend-mentor/sign-in-shadcnui">Sign in UI</Link>
          <Link href="/frontend-mentor/maker-prelaunch-landing-page">
            Maker Pre-Launch Landing Page With sign-in UI
          </Link>
          <Link href="/frontend-mentor/blogr-landing-page">
            Blogr Landing Page
          </Link>
          <Link href="/frontend-mentor/age-calculator-app">
            Age calculator app
          </Link>
          <Link href="/frontend-mentor/faq-accordion-&-sign-in-ui">
            FAQs Accordion Card{" "}
          </Link>
          <Link href="/frontend-mentor/contact-form">Contact Form</Link>
          <Link href="/frontend-mentor/intro-section-with-dropdown-navigation-&-theme-toggle">
            Intro Section with Dropdown Navigation
          </Link>
          <Link href="/frontend-mentor/interactive-pricing-component">
            Interactive pricing component
          </Link>
          <Link href="/frontend-mentor/pricing-component-with-toggle">
            Pricing component with toggle
          </Link>
          <Link href="/frontend-mentor/coding-bootcamp-testimonials-slider">
            Coding Bootcamp Testimonials Slider
          </Link>
          <Link href="/frontend-mentor/social-media-dashboard-with-theme-switcher">
            Social Media Dashboard with Theme Switcher
          </Link>
          <Link href="/frontend-mentor/skilled-elearning-landing-page-with-theme-toggle">
            Skilled Elearning Landing Page with Theme Switcher
          </Link>
          <Link href="/frontend-mentor/design-structure">Design Structure</Link>
        </div>
      </div>
    </div>
  );
}
