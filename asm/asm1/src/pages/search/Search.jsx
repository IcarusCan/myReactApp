import NavBar from '../components/NavBar/NavBar';
import Contact from '../components/Contact/Contact';
import Footer from '../components/Footer/Footer';
import SearchPopup from '../components/Search/SearchPopup';
import SearchList from '../components/Search/SearchList';

import searchData from './search.json';

import './Search.css';

const Search = () => {
  return (
    <>
      <NavBar />
      <div className="search-result">
        <div className="search-container">
          <SearchPopup />
          <SearchList onSearchData={searchData} />
        </div>
      </div>
      <Contact />
      <Footer />
    </>
  );
};

export default Search;
