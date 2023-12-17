import { image01 } from '../assets';
import styles, { layout } from '../style';
import Button from './Button';

const Digital = () => (
  <section
    className={`${layout.section} sm:flex-row xs:flex-col-reverse
    exs:flex-col-reverse`}
  >
    <div className={layout.sectionInfo}>
      <h2 className={`${styles.heading2} text-analogousColor1 lg:text-[30px]`}>
        Digital Strategy Consulting
      </h2>
      <p className={`${styles.paragraph}  max-w-[670px] mt-5`}>
        Your digital strategy should complement the overall marketing strategy
        of the company. In online marketing, each component will never work in
        isolation and every business needs a different mix. We provide a clear
        concept and strategic overview to find the most efficient model for your
        business.
      </p>
      <div className="flex flex-row flex-wrap sm:mt-10 mt-6">
        <Button title="LEARN MORE" />
      </div>
    </div>

    <div className={layout.sectionImg}>
      <img src={image01} alt="image1" className="w-[100%] h-[100%]" />
    </div>
  </section>
);

export default Digital;
