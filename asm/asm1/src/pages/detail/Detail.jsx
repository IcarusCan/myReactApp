import NavBar from '../components/NavBar/NavBar';
import Footer from '../components/Footer/Footer';
import Contact from '../components/Contact/Contact';
import DetailHeader from '../components/Detail/DetailHeader';
import DetailPics from '../components/Detail/DetailPics';
import DetailMore from '../components/Detail/DetailMore';

import './Detail.css';

import detailData from './detail.json';

const Detail = () => {
  return (
    <>
      <NavBar />
      <div className="detail">
        <div className="detail-container">
          <div className="detail-header">
            <DetailHeader
              name={detailData.name}
              address={detailData.address}
              distance={detailData.distance}
              price={detailData.price}
            />
          </div>

          <div className="detail-pic">
            <DetailPics photos={detailData.photos} />
          </div>

          <div className="detail-more">
            <DetailMore
              title={detailData.title}
              description={detailData.description}
              nine_night_price={detailData.nine_night_price}
            />
          </div>
        </div>
      </div>
      <Contact />
      <Footer />
    </>
  );
};

export default Detail;
