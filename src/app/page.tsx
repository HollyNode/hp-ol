import Hero from './components/ui/Hero';
import Contact from './components/contact/page';
import Info from './components/info/page';
import About from './components/about/page';

const Home = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Hero />
      <main className="flex-grow">
        <Info />
        <About />
        <Contact />
      </main>
    </div>
  );
};

export default Home;