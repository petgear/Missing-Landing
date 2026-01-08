import { Header } from "../widgets/Header/Header";
import { Hero } from "../widgets/Hero/Hero";
import { Popular } from "../widgets/Popular/Popular";
import { Prices } from "../widgets/Prices/Prices";
import { Steps } from "../widgets/Steps/Steps";
import { WhyUs } from "../widgets/WhyUs/WhyUs";
import { CTA } from "../widgets/CTA/CTA";
import { Footer } from "../widgets/Footer/Footer";

import styles from './LandingPage.module.css'


type LandingPageProps  = {
  theme: 'light' | 'dark';
  onToggleTheme: () => void;
}

export default function LandingPage({theme, onToggleTheme}: LandingPageProps) {
  return (
    <div className={`${styles.page} ${theme}`}>
      <Header theme={theme} onToggle={onToggleTheme}/>
      <Hero/>
      <Steps/>
      <WhyUs/>
      <Popular/>
      <Prices/>
      <CTA
      title="Готовы начать путь к переезду?"
      text={`
      Первый шаг — самый важный.
      Узнайте, какие варианты переезда подходят именно вам.
      Это бесплатно и ни к чему не обязывает.
      `}
      buttonText="Подобрать путь переезда ➜"
      variant="final"
      />
      <Footer/>
    </div>
  );
}