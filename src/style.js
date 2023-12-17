const styles = {
  boxWidth: 'xl:max-w-[1280px] w-full',

  heading2:
    'font-poppins font-semibold xs:text-[28px] text-[40px] sm:text-[23px] text-analogousColor1 xl:leading-[76.8px] xs:leading-[32px] sm:leading-[35px] leading-[66.8px] w-full xs:text-[25px]',
  paragraph:
    'font-poppins font-normal text-black sm:text-[12px] text-[16px] leading-[22px] exs:text-[12px]',

  flexCenter: 'flex justify-center items-center',
  flexStart: 'flex justify-center items-start',

  paddingX: 'sm:px-16 px-6',
  paddingY: 'sm:py-16 py-6',
  padding: 'sm:px-16 px-6 sm:py-12 py-4',

  marginX: 'sm:mx-16 mx-6',
  marginY: 'sm:my-16 my-6',
};

export const layout = {
  section: `flex md:flex-row flex-col ${styles.paddingY}`,
  // sectionReverse: `flex md:flex-row flex-col-reverse ${styles.paddingY}`,
  sectionReverse: `flex md:flex-row sm:flex-row flex-col  ${styles.paddingY}`,

  sectionImgReverse: `flex-1 flex ${styles.flexCenter} md:mr-10 mr-0 md:mt-0 mt-10 relative`,
  sectionImg: `flex-1 flex ${styles.flexCenter} md:ml-10 ml-0 md:mt-0 mt-10 relative`,

  sectionInfo: `flex-1 ${styles.flexStart} flex-col exs:text-center exs:items-center xs:text-center xs:items-center elg:text-start ss:text-start sm:text-start md:text-start lg:text-start xl:text-start
  elg:items-start ss:items-start sm:items-start md:items-start lg:items-start xl:items-start`,
};

export default styles;
