import Style from './style';

import { Navbar, Footer, Hero, Digital, WebMobile } from './components';

const App = () => {
  return (
    <div className="  w-full overflow-hidden">
      <div className={` bg-primaryColor ${Style.paddingX} ${Style.flexCenter}`}>
        <div className={`${Style.boxWidth}`}>
          <Navbar />
        </div>
      </div>

      <div className={`  ${Style.flexStart}`}>
        <div className={`${Style.boxWidth}`}>
          <Hero />
        </div>
      </div>

      <div className={`  ${Style.paddingX} ${Style.flexStart}`}>
        <div className={`${Style.boxWidth}`}>
          <WebMobile /> <Digital />
        </div>
      </div>
      <div className={` bg-primaryColor ${Style.paddingX} ${Style.flexCenter}`}>
        <div className={`${Style.boxWidth}`}>
          <Footer />
        </div>
      </div>
    </div>
  );
};

export default App;
