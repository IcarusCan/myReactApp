import SearchListItem from './SearchListItem';

const SearchList = ({ onSearchData }) => {
  return (
    <div className="search-list-items">
      {onSearchData.map((data, index) => (
        <SearchListItem
          key={index}
          name={data.name}
          distance={data.distance}
          tag={data.tag}
          type={data.type}
          description={data.description}
          free_cancel={data.free_cancel}
          price={data.price}
          rate={data.rate}
          rate_text={data.rate_text}
          image_url={data.image_url}
        />
      ))}
    </div>
  );
};

export default SearchList;
