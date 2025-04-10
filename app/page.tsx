import Hero from '@/components/Hero';
import Problem from '@/components/Problem';
import Solution from '@/components/Solution';
import Product from '@/components/Product';
import Market from '@/components/Market';
import ValueProposition from '@/components/ValueProposition';
import Team from '@/components/Team';
import FinancialForecast from '@/components/FinancialForecast';
import Roadmap from '@/components/Roadmap';
import Contact from '@/components/Contact';

export default function Home() {
  return (
    <>
      <Hero />
      <Problem />
      <Solution />
      <Product />
      <Market />
      <ValueProposition />
      <Team />
      <FinancialForecast />
      <Roadmap />
      <Contact />
    </>
  );
} 