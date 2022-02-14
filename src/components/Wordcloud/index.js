import React from 'react';
import { Box } from '@chakra-ui/react';
import ReactWordcloud from 'react-wordcloud';

const WordCloud = () => {
  const words = [
    {
      text: 'Pontosság',
      value: 64,
    },
    {
      text: 'Megbízhatóság',
      value: 80,
    },
    {
      text: 'Elégedetség',
      value: 52,
    },
    {
      text: 'Gyorsaság',
      value: 48,
    },
    {
      text: 'Következetesség',
      value: 39,
    },
    {
      text: 'Fantasztikus',
      value: 34,
    },
    {
      text: 'Munka',
      value: 24,
    },
    {
      text: 'Munka',
      value: 84,
    },
    {
      text: 'Tökéletesség',
      value: 79,
    },
    {
      text: 'Pontosság',
      value: 64,
    },
    {
      text: 'Megbízhatóság',
      value: 80,
    },
    {
      text: 'Elégedetség',
      value: 52,
    },
    {
      text: 'Gyorsaság',
      value: 48,
    },
    {
      text: 'Következetesség',
      value: 39,
    },
    {
      text: 'Fantasztikus',
      value: 34,
    },
    {
      text: 'Munka',
      value: 24,
    },

    {
      text: 'Tökéletesség',
      value: 79,
    },
    {
      text: 'Pontosság',
      value: 64,
    },
    {
      text: 'Problémamegoldás',
      value: 80,
    },
    {
      text: 'Elégedetség',
      value: 52,
    },
    {
      text: 'Gyorsaság',
      value: 48,
    },
    {
      text: 'Következetesség',
      value: 39,
    },
    {
      text: 'Fantasztikus',
      value: 34,
    },
    {
      text: 'Munka',
      value: 24,
    },
    {
      text: 'Kitartás',
      value: 84,
    },
    {
      text: 'Idő',
      value: 79,
    },
  ];
  const options = {
    rotations: 2,
    rotationAngles: [-50, 50],
  };

  const callbacks = {
    getWordTooltip: () => {
      return null;
    },
    onWordMouseOver: () => {
      return null;
    },
    onWordClick: () => {
      return null;
    },
  };
  // const size = [600, 400];
  return (
    <Box right={0}>
      <ReactWordcloud callbacks={callbacks} options={options} words={words} />
    </Box>
  );
};

export default WordCloud;
