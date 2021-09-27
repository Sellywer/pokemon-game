import './App.css';
import Header from './components/header/header';
import Layout from './components/layout/layout';
import Footer from './components/footer/footer';
import background1 from './assets/bg1.jpeg';
import background2 from './assets/bg2.jpeg';
import PokemonCard from './components/pokemon-card/pokemon-card';
import data from './data/data.json';


function App() {
  return (
    <div className="App">
      <Header 
        title="This is title"
        descr="This is description"
      />
      <Layout 
        title="This is title layout1"
        urlBg={background1}
      >
        <p>This is description layout1</p>
        <p>This is description layout1</p>
      </Layout>
      <Layout 
        title="This is title layout2"
        colorBg="red"
        >
        <div className="flex">
          {
            data.map((item) => <PokemonCard 
              key={item.id}
              type={item.type}
              values={item.values}
              img={item.img}
              name={item.name}
              id={item.id}
            /> )
          }
        </div>
      </Layout>
      <Layout 
        title="This is title layout3"
        urlBg={background2}
        >
        <p>This is description layout3</p>
        <p>This is description layout3</p>
      </Layout>
      <Footer />
    </div>
  );
}

export default App;
