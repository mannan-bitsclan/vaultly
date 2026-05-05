import { useState, useEffect } from "react";
import { Navbar, Footer } from "../../components/layout";
import { PlatformTicker, SurveyPopup } from "../../components/common";
import {
  HeroSection,
  ProblemsSolutionsSection,
  HowItWorksSection,
  SetupCompleteCTA,
  TestimonialsSection,
  BlogsSection,
  FAQSection,
  CTASection,
} from "../../components/sections";
import "./LandingPage.css";

export function LandingPage() {
  const [supporterCount, setSupporterCount] = useState(2400);
  const [showSurvey, setShowSurvey] = useState(false);

  // Survey popup: show after 10 seconds, but not if user already clicked through this session
  useEffect(() => {
    if (sessionStorage.getItem("vaultly_survey_clicked")) return;
    const timer = setTimeout(() => setShowSurvey(true), 10000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="landing-page">
      {/* Survey Popup */}
      {showSurvey && <SurveyPopup onClose={() => setShowSurvey(false)} />}

      {/* Navigation */}
      <Navbar />

      {/* Hero Section */}
      <HeroSection
        supporterCount={supporterCount}
        setSupporterCount={setSupporterCount}
      />

      {/* Platform Ticker */}
      <div className="landing-page__ticker-wrapper">
        <PlatformTicker />
      </div>

      {/* Problems & Solutions Section */}
      <ProblemsSolutionsSection />

      {/* How It Works Section */}
      <HowItWorksSection />

      {/* Blogs Section */}
      <BlogsSection />

      {/* Setup Complete CTA */}
      <SetupCompleteCTA />

      {/* Testimonials Section */}
      <TestimonialsSection />

      {/* FAQ Section */}
      <FAQSection />

      {/* CTA Section */}
      <CTASection
        supporterCount={supporterCount}
        setSupporterCount={setSupporterCount}
      />

      {/* Footer */}
      <Footer />
    </div>
  );
}
