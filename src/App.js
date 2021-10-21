import './App.css';
import WeatherData from './weatherData';
import WeatherForcast from './components/WeatherForcast';


console.log(WeatherData)

function App() {
  const weather = WeatherData.map((ele, index) => {
   
    return (
     <WeatherForcast 
     {...ele}
     key={index}
     />
    )
  })
  console.log("this is weather", weather)
    return (
      <div>
        <h1>Weather Stuff</h1>
        <section>
          {weather}
        </section>
      </div>
    )
}

// function App(props) {
//   return (
//     <div className="App">
//       <WeatherForcast />

      
//     </div>
//   );
// }

export default App;
