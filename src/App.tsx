import "./App.css";
import PatientList from "./components/patient/PatientList";
import Header from "./layout/Header/Header";
import Footer from "./layout/Footer/Footer";

function App() {
  return (
    <>
      <Header />
      <main className="app-container">
        <PatientList />
      </main>
      <Footer />
    </>
  );
}

export default App;
