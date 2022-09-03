import logo from "./logo.svg";
import "./App.css";
import Form from "./components/Form";
import Card from "./components/Card";
import ListEmojis from "./components/ListEmojis";

function App() {
  return (
    <>
    {/* {name:'pepito',edad:28} */}
      <section className="cards">
        <Card title="Card con parrafo" children={<ListEmojis/>}/>
        <Card title="Card de Emojis" />
        <Card title="Card"/>
     
      </section>
    </>
  );
}

export default App;
