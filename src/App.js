import logo from './logo.svg';
import { useState } from 'react';
import './App.css';
import Card from './components/Card.js';
import CardClass from './components/CardClass.js';
import Divider from './components/Divider.js';
import Button from './components/Button.js';
import ButtonClass from './components/ButtonClass.js';
import Counter from './components/Counter.js';
import CounterClass from './components/CounterClass.js';
import Calculator from './components/Calculator.js';
import TODO from './components/TODO.js';

function App() {

  const [numClicks, setNumClicks] = useState(0);

  const handleClick = () => {
    setNumClicks(numClicks + 1);
  };
  const resetCounter = () => {
    setNumClicks(0);
  };

  return (
    <div className="App">
      <div className='main-container'>
        <Divider
          bgColor='black'
          color='white'
          title='Here starts Cards-Section'
        />
        <h1>Here is what our alumni say about freeCodeCamp:</h1>
        <Card
          name='Emma Bostian'
          country='Sweden'
          img='Emma'
          charge='Software Engineer'
          company='Spotify'
          testimony="I've always struggled with learning JavaScript. I've taken many courses but freeCodeCamp's course was the one which stuck. Studying JavaScript as well as data structures and algorithms on freeCodeCamp gave me the skills and confidence I needed to land my dream job as a software engineer at Spotify."
          alt="EmmaPhoto"
         />
         <Card
          name='Shawn Wang'
          country='Singapur'
          img='Shawn'
          charge='Ingeniero de Software'
          company='Amazon'
          testimony="Da miedo cambiar de carrera. Solo gané la confianza de que podía programar trabajando a través de los cientos de horas de lecciones gratuitas en freeCodeCamp. Dentro de un año tuve un trabajo de seis cifras como ingeniero de software. freeCodeCamp cambió mi vida."
          alt="ShawnPhoto"
         />
         <Card
          name='Sarah Chima'
          country='Nigeria'
          img='Sarah'
          charge='Ingeniera de Software'
          company='ChatDesk'
          testimony='freeCodeCamp fue la puerta de entrada a mi carrera como desarrollador de software. El plan de estudios bien estructurado llevó mis conocimientos de programación de un nivel de principiante total a un nivel muy seguro. Era todo lo que necesitaba para conseguir mi primer trabajo de desarrollador en una empresa increíble.'
          alt="SarahPhoto"
         />
        <Divider
          bgColor='lightBlue'
          color='black'
          title='Here starts Counter-Section'
        />
        <Counter
          numClicks={numClicks}
        />
        <Button
          text='Clic'
          isClickButton={true}
          handleClick={handleClick}
        />
        <Button
          text='Reiniciar'
          isClickButton={false}
          handleClick={resetCounter}
        />
        <Divider
          bgColor='black'
          color='white'
          title='Here starts Calculator-Section'
        />
        <Calculator />
        <Divider
          bgColor='lightBlue'
          color='black'
          title='Here starts TODO-Section'
        />
        <TODO />
        <Divider
          bgColor='black'
          color='white'
          title='Here starts Cards-Section with Class Components'
        />
        <CardClass
          name='Emma Bostian'
          country='Sweden'
          img='Emma'
          charge='Software Engineer'
          company='Spotify'
          testimony="I've always struggled with learning JavaScript. I've taken many courses but freeCodeCamp's course was the one which stuck. Studying JavaScript as well as data structures and algorithms on freeCodeCamp gave me the skills and confidence I needed to land my dream job as a software engineer at Spotify."
          alt="EmmaPhoto"
         />
         <CardClass
          name='Shawn Wang'
          country='Singapur'
          img='Shawn'
          charge='Ingeniero de Software'
          company='Amazon'
          testimony="Da miedo cambiar de carrera. Solo gané la confianza de que podía programar trabajando a través de los cientos de horas de lecciones gratuitas en freeCodeCamp. Dentro de un año tuve un trabajo de seis cifras como ingeniero de software. freeCodeCamp cambió mi vida."
          alt="ShawnPhoto"
         />
         <CardClass
          name='Sarah Chima'
          country='Nigeria'
          img='Sarah'
          charge='Ingeniera de Software'
          company='ChatDesk'
          testimony='freeCodeCamp fue la puerta de entrada a mi carrera como desarrollador de software. El plan de estudios bien estructurado llevó mis conocimientos de programación de un nivel de principiante total a un nivel muy seguro. Era todo lo que necesitaba para conseguir mi primer trabajo de desarrollador en una empresa increíble.'
          alt="SarahPhoto"
         />
         <Divider
          bgColor='lightBlue'
          color='black'
          title='Here starts Counter-Section with Class Components'
        />
        <CounterClass
          numClicks={numClicks}
        />
        <ButtonClass
          text='Clic'
          isClickButton={true}
          handleClick={handleClick}
        />
        <ButtonClass
          text='Reiniciar'
          isClickButton={false}
          handleClick={resetCounter}
        />
      </div>
    </div>
  );
}

export default App;
