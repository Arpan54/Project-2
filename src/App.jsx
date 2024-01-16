import ContactForm from "./Components/ContactForm/ContactForm"
import Header from "./Components/Header/Header"
import Nav from "./Components/Nav/Nav"


function App() {
  return (
    <>
      <Nav/>
      <main className="main_container">
        <Header/>
        <ContactForm/>
      </main>
      
    </>
  )
}

export default App
