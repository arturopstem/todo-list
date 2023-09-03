import './Layout.css';
import Header from './Header';
import Main from './Main';
import Footer from './Footer';

const Layout = () => {
  const app = document.createElement('div');
  app.classList.add('app');
  app.appendChild(Header());
  app.appendChild(Main());
  app.appendChild(Footer());

  return app;
};

export default Layout;
