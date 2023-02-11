import Header from './Components/Header/Header';
import MainPage from './Components/MainPage/MainPage';
import Form from './Components/Form/Form';
import ContactMe from './Components/ContactMe/ContactMe';
import './App.css';

function App() {
  return (
    <div className="App">
      <Header></Header>
      <MainPage></MainPage>
      <Form></Form>
      <ContactMe></ContactMe>
    </div>
  );
}

export default App;
