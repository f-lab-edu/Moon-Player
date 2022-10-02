import Header from "./components/layout/Header";
import Footer from "./components/layout/Footer";
import LoginPage from "pages/LoginPage";


const Layout = ({ children }) => (<div style={{ height: '100vh', display: 'flex', flexDirection: 'column' }}>
  <Header />
  <main style={{ flex: 1 }}>{children}</main>
  <Footer />
</div>);


function App() {
  return (
      <LoginPage />
  );
}

export default App;
