import { Route, Routes } from 'react-router-dom';
import Header from './components/layout/header/header';
import Footer from './components/layout/footer/footer';
import Home from './components/pages/home/home';
import Menu from './components/layout/header/menu';
import { useSelector } from 'react-redux';
import './App.module.scss';
import Admin from './components/pages/admin/admin';
import Product from './components/pages/product/product';
import MainHome from './components/pages/mainHome/mainHome';
function App() {
  const menuOpen = useSelector((state) => state.menuOpen);

  let router = [
    { id: 1, path: "/", element: <MainHome /> },
     { id: 1, path: "/admin", element: <Admin /> },
       { id: 1, path: "/product", element: <Product /> },
  ];
  return (
    <div className="app">
      {menuOpen ? <Menu /> :
   <>   <Header />
      <Routes>
        {router.map((el) => (
          <Route key={el.id} path={el.path} element={el.element} />
        ))}
      </Routes>
      <Footer />
      </>
      }
    </div>
  );
}

export default App;
