// @ts-nocheck
import './App.css';
import Children from './components/children/Children';
import NewChildren from './components/children/Children';
import Content from './components/content/Content';
import Navbar from './components/Navabr/Navbar';

function App() {
  const data = [
    {
      id: 1,
      name: 'Piłka'
    },
    {
      id: 2,
      name: 'But'
    },
  ]
  return (
    <div className="App">
      {/* <Navbar /> */}
      {/* <Content /> */}
      {/* {
        data.map((d) =>
          <Children number={d.id}>
            <Title number={d.name}>

            </Title>
          </Children>
        )
      } */}
      {
        data.map((d) => <Children data={d} />)
      }

    </div>
  );
}

export default App;
