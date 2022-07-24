import "./App.css";
import Navigation from "./components/Navigation/Navigation";
import Logo from "./components/Logo/Logo";
import Rank from "./components/Rank/Rank";
import ImageLinkForm from "./components/ImageLinkForm/ImageLinkForm";
import FaceRecognition from "./components/FaceRecognition/FaceRecognition";
import Signin from "./components/Signin/Signin";
import Register from "./components/Register/Register";
import { useSelector } from "react-redux";

const App = () => {
  const route = useSelector((state) => state.app.route);

  return (
    <div className="App">
      <Navigation />
      {route === "home" ? (
        <div>
          <Logo />
          <Rank />
          <ImageLinkForm />
          <FaceRecognition />
        </div>
      ) : route === "signin" ? (
        <Signin />
      ) : (
        <Register />
      )}
    </div>
  );
};

export default App;
