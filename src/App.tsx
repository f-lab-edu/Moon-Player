import Header from "./components/layout/Header";
import Footer from "./components/layout/Footer";
import SignInPage from "./pages/SignIn";



const Layout= ({ children }:any) => (<div style={{ height: '100vh', display: 'flex', flexDirection: 'column' }}>
  <Header />
  <main style={{ flex: 1 }}>{children}</main>
  <Footer />
</div>);


const App=()=>{
  return (
    <Layout className="App">
      <SignInPage />
    
    </Layout>
  );
}

export default App;
