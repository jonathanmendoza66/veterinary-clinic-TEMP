import { BrowserRouter, Route, Routes } from "react-router-dom";
import { AppShell } from "@/components/app-shell";
import { ScrollToTop } from "@/components/scroll-to-top";
import { HomePage } from "@/pages/home";
import { AboutPage } from "@/pages/about";
import { ServicesPage } from "@/pages/services";
import { ServiceDetailPage } from "@/pages/service-detail";
import { TeamPage } from "@/pages/team";
import { PlansPage } from "@/pages/plans";
import { PricingPage } from "@/pages/pricing";
import { DiagnosticsPage } from "@/pages/diagnostics";
import { ConditionsPage } from "@/pages/conditions";
import { EmergencyPage } from "@/pages/emergency";
import { GalleryPage } from "@/pages/gallery";
import { JournalPage } from "@/pages/journal";
import { JournalPostPage } from "@/pages/journal-post";
import { TestimonialsPage } from "@/pages/testimonials";
import { CommunityPage } from "@/pages/community";
import { FAQPage } from "@/pages/faq";
import { PoliciesPage } from "@/pages/policies";
import { ContactPage } from "@/pages/contact";
import { BookPage } from "@/pages/book";
import { NotFoundPage } from "@/pages/not-found";

export function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <AppShell>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/services" element={<ServicesPage />} />
          <Route path="/services/:slug" element={<ServiceDetailPage />} />
          <Route path="/team" element={<TeamPage />} />
          <Route path="/plans" element={<PlansPage />} />
          <Route path="/pricing" element={<PricingPage />} />
          <Route path="/diagnostics" element={<DiagnosticsPage />} />
          <Route path="/conditions" element={<ConditionsPage />} />
          <Route path="/emergency" element={<EmergencyPage />} />
          <Route path="/gallery" element={<GalleryPage />} />
          <Route path="/journal" element={<JournalPage />} />
          <Route path="/journal/:slug" element={<JournalPostPage />} />
          <Route path="/testimonials" element={<TestimonialsPage />} />
          <Route path="/community" element={<CommunityPage />} />
          <Route path="/faq" element={<FAQPage />} />
          <Route path="/policies" element={<PoliciesPage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/book" element={<BookPage />} />
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </AppShell>
    </BrowserRouter>
  );
}

export default App;
