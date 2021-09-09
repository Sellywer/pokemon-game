import './App.css';
import Header from './components/header/header';
import Layout from './components/layout/layout';
import Footer from './components/footer/footer';
import background1 from './assets/bg1.jpeg';
import background2 from './assets/bg2.jpeg';


function App() {
  return (
    <div className="App">
      <Header 
        title="This is title"
        descr="This is description"
      />
      <Layout 
        title="This is title layout1"
        descr="This is description layout1"
        urlBg={background1}
      />
      <Layout 
        title="This is title layout2"
        descr="This is description layout2"
        colorBg="red"
      />
      <Layout 
        title="This is title layout3"
        descr="This is description layout3"
        urlBg={background2}
      />
      <Footer />
    </div>
  );
}

export default App;
