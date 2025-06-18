import "./pages/index.css";
import Header from "./components/Header/Header";
import Main from "./components/Main/Main";
import Footer from "./components/Footer/footer";

import iconHeartActive from "./images/icon_heart_active.svg";
import iconHeart from "./images/icon_heart.svg";
import iconTrash from "./images/icon_trash.svg";

function App() {
  return (
    <>
      <Header />
      <Main />
      <Footer />
    </>
  );
}

export default App;
