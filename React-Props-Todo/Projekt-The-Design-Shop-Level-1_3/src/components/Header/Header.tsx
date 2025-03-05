
import './Header.css';

const Header = () => {
  return (
    <>
      <header>
        <h2>The Design Shop</h2>
          <div className="middle">
            <a href="#Featured">Featured</a>
            <a href="#Lifestyle">Lifestyle</a>
            <a href="#Books">Books</a>
            <a href="#Digital">Digital</a>
          </div>
          <div className="right">
            <a href="#Werkly Pics">Werkly Pics</a>
            <a href="#The Desing Blog">The Desing Blog</a>
          </div>
      </header>
    </>
  );
};

export default Header;
