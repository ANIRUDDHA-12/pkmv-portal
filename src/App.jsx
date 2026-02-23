import Header from './components/Header';
import HeroSection from './components/HeroSection';
import StatsStrip from './components/StatsStrip';
import HolisticDevelopment from './components/HolisticDevelopment';
import BentoGrid from './components/BentoGrid';
import Footer from './components/Footer';

export default function App() {
    return (
        <div className="min-h-screen font-sans">
            <Header />
            <main>
                <HeroSection />
                <StatsStrip />
                <HolisticDevelopment />
                <BentoGrid />
            </main>
            <Footer />
        </div>
    );
}
