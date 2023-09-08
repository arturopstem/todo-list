import './Footer.css';

const Footer = () => {
  const footer = document.createElement('footer');
  footer.classList.add('footer');
  footer.textContent = 'Made by Arturop';

  return footer;
};

export default Footer;
