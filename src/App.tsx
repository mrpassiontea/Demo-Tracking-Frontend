import "./App.css";
import Faq from "./Faq";
import TrackingInputForm from "./TrackingInputForm";

function App() {
  return (
    <div className="mainContainer">
      <h1 className="title">Tracking Center</h1>
      <TrackingInputForm />
      <hr />
      <Faq />
    </div>
  );
}

export default App;
