import { HeroSection } from '../components/HeroSection.jsx'
import { GameSelector } from '../components/GameSelector.jsx'
import { TrendingProduct } from '../components/TrendingProduct.jsx'
import { WorkSteps } from '../components/WorkSteps.jsx'
import { Footer } from "../components/Footer.jsx";
import { TrustFeature } from "../components/TrustFeature.jsx";
import { PlayerCta } from "../components/PlayerCta.jsx";


const Home = () => {

  return (
    <main className="min-h-screen overflow-hidden bg-[#030505] text-white">

      {/* =====================================================
          HERO
      ===================================================== */}
      <HeroSection />


      {/* =====================================================
          GAME SELECTOR
      ===================================================== */}
      <GameSelector />


      {/* =====================================================
          TRENDING PRODUCTS
      ===================================================== */}
      <TrendingProduct />


      {/* =====================================================
          HOW IT WORKS
      ===================================================== */}
      <WorkSteps />


      {/* =====================================================
          TRUST / FEATURES
      ===================================================== */}
      <TrustFeature />


      {/* =====================================================
          PLAYER CTA
      ===================================================== */}
      <PlayerCta />


      {/* =====================================================
          FOOTER
      ===================================================== */}
      <Footer />

    </main>
  );
};

export default Home;

