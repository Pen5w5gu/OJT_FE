import HeaderImg from '../../../assets/images/studentPage/Header01.png';
import InfoImg from '../../../assets/images/studentPage/Info.png';
import FooterImg from '../../../assets/images/studentPage/Footer01.png';

const Home: React.FC = () => {
  return (

    <div className=" d-flex flex-column flex-1">
      <div >
        <img className="w-100" src={HeaderImg} alt="" />
      </div >
      <div className="container" >
        <img className="w-100 my-5" src={InfoImg} alt="" />
      </div>
      <div >
        <img className="w-100" src={FooterImg} alt="" />
      </div>
    </div>
  );
};

export default Home;