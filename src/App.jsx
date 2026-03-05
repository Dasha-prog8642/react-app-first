import logo from './logo.svg';
import './App.css';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';

function App() {
  return (
    <body>
       <Header />
    <div className="App">
     
      <main className="main-content">
        <h1>Привіт, світ!</h1>
        <p>Це моя перша React-програма.</p>
      </main>
      <Footer />
    </div>
    </body>
  );
}

export default App;
