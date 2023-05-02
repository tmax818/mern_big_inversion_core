import logo from './logo.svg';
import './App.css';
import {PersonCard} from "./Components/PersonCard";

function App() {
  return (
    <div>
      <PersonCard firstName={"Tyler"} lastName={"Maxwell"} age={39} hairColor={"bald"}/>
      <PersonCard firstName={"Jeff"} lastName={"Lee"} age={49} hairColor={"sandy blonde"}/>
      <PersonCard firstName={"Mike"} lastName={"Kolora"} age={51} hairColor={"black"}/>
      <PersonCard firstName={"Mark"} lastName={"Watson"} age={51} hairColor={"bald"}/>
    </div>
  );
}

export default App;
