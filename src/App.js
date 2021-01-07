import "./App.css";
import Header from "./components/Header/Header";
import Section from "./components/UI/Section/Section";

const App = (props) => {
  return (
    <div>
      <Header></Header>
      <Section title="Quienes somos"></Section>
    </div>
  );
};

export default App;
