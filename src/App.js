import React from 'react';
import About from './components/About';

import Features from './components/Features';
import MainLayout from './components/MainLayout';
import AutoPlay from './components/Slider';
import AutoPlayMethods from './components/Slider/Advertisement';
import Testimonials from './components/Testimonials';
import WordCloud from './components/Wordcloud';

function App() {
  return (
    <div>
      <MainLayout>
        <AutoPlayMethods />
        <About />
        <Features />
        <Testimonials />
        <WordCloud />
        <AutoPlay />
      </MainLayout>
    </div>
  );
}

export default App;
