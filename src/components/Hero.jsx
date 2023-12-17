import styles from '../style';
import Button from './Button';

const Hero = () => {
  return (
    <section
      id="home"
      // className={` sm:bg-contain bg-hero-pattern bg-cover xl:bg-contain lg:bg-cover xs:bg-contain bg-no-repeat flex md:flex-row flex-col ${styles.paddingY}`}
      className={` sm:bg-contain bg-[url('./assets/heroimg.jpg')] bg-cover xl:bg-cover lg:bg-cover  elg:bg-cover exs:bg-contain xs:bg-contain bg-no-repeat flex md:flex-row flex-col ${styles.paddingY}`}
    >
      {/* <div
        className={` bg-gradient-to-r from-green-400 to-blue-500 flex-1 ${styles.flexStart} flex-col xl:px-0 sm:px-22 px-6 py-8 mt-80 lg:ml-16
        elg:mr-[670px] lg:mr-[470px] sm:mt-96 exs:mt-44 xl:mr-[52px]`}
      > */}
      <div
        className={` bg-gradient-to-r from-green-400 to-blue-500 flex-1 ${styles.flexStart} flex-col xl:px-0 sm:px-22 px-6 py-8 mt-80 lg:ml-16
        elg:mr-[670px] lg:mr-[470px] sm:mt-96 exs:mt-44 xl:mr-[720px]`}
      >
        <h1
          className=" font-poppins font-semibold ss:text-[48px] exs:text-[2.1rem] 
        exs:leading-10 xl:text-[28px] text-[52px] text-white ss:leading-[50px] leading-[75px] w-full"
        >
          We Crush Your Competitors, Goals, And Sales Records - Without The B.S.
        </h1>
        <div className=" mt-5">
          <Button title="GET FREE CONSULTATION" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
