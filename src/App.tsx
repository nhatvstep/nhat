import Navbar from './components/Navbar';
import Hero from './components/Hero';
import BigStats from './components/BigStats';
import LeadMagnet from './components/LeadMagnet';
import Solutions from './components/Solutions';
import Pricing from './components/Pricing';
import Footer from './components/Footer';

export default function App() {
  return (
    <div className="min-h-screen bg-vbase selection:bg-vprimary/30 font-sans">
      <Navbar />
      <main>
        <Hero />
        <Solutions />
        <LeadMagnet />
        <BigStats />
        <Pricing />
      </main>
      <Footer />
    </div>
  );
}
