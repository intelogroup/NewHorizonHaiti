import { useLanguage } from '../contexts/LanguageContext';
import Hero from './Hero';
import Stats from './Stats';
import Activities from './Activities';
import PR50 from './PR50';
import AboutUs from './AboutUs';

export default function Home() {
  const { t } = useLanguage();

  return (
    <>
      <Hero />
      <Stats />
      <Activities />
      <PR50 />
      <AboutUs />
    </>
  );
}