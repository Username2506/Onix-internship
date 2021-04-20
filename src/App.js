import './App.css';
import Header from "./layout/header/Header"
import Footer from "./layout/footer/Footer"
import EntryAssignment from "./components/EntryAssignment/EntryAssignment"
import Biography from "./components/Biography/Biography"
import ApiComponent from "./components/ApiComponent/ApiComponent"
import Image from "./components/Image/Image"

function App() {
  return (
    <div>
        <Header/>
        <div className = "workspace">
            <EntryAssignment />
            <Biography />
            <ApiComponent />
            <Image />
        </div>
        <Footer />
    </div>
  );
}

export default App;
