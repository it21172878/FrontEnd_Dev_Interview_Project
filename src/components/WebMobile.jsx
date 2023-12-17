import { image02 } from '../assets';
import styles, { layout } from '../style';
import Button from './Button';

const WebMobile = () => (
  <section className={`${layout.sectionReverse}  `}>
    <div className={layout.sectionImgReverse}>
      <img
        src={image02}
        alt="image02"
        className="w-[100%] h-[100%] relative z-[5]"
      />

      {/* gradient start */}
      {/* <div className="absolute z-[3] -left-1/2 top-0 w-[50%] h-[50%] rounded-full white__gradient" /> */}
      {/* <div className="absolute z-[0] w-[50%] h-[50%] -left-1/2 bottom-0 rounded-full pink__gradient" /> */}
      {/* gradient end */}
    </div>

    <div className={layout.sectionInfo}>
      <h2 className={`${styles.heading2} text-analogousColor1 lg:text-[30px]`}>
        Web & Mobile App Development
      </h2>
      <p
        className={`${styles.paragraph} max-w-[670px] lg:max-w-[670px] lg:text-[15px] mt-5`}
      >
        Your web and mobile Apps are pieces of the puzzle to grow your business.
        We use frameworks which tailor content and engagement methods to respond
        to different intents shown by your potential customers who interact with
        your business online.
      </p>

      <div className="flex flex-row flex-wrap sm:mt-10 mt-6">
        <Button title="LEARN MORE" />
      </div>
    </div>
  </section>
);

export default WebMobile;
