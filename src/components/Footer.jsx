import styles from '../style';
import { logo } from '../assets';
import { footerLinks } from '../constants';

const Footer = () => (
  <section className={`${styles.flexCenter} ${styles.paddingY} flex-col`}>
    <div className={`${styles.flexStart} md:flex-row flex-col mb-8 w-full`}>
      <div className="flex-[1] flex flex-col justify-start mr-10">
        <a href="https://atdigital.io/" target="_blank" rel="noreferrer">
          <img
            src={logo}
            alt="at-digital"
            className="w-[266px] h-[72.14px] object-contain"
          />
        </a>
        <p className={`${styles.paragraph} text-white mt-2 max-w-[450px]`}>
          Your goal is our target. Not anything in between. We use online
          marketing platforms and tools to achieve single objective - your
          business results.
        </p>
      </div>

      <div className="flex-[1] w-full flex flex-row justify-between flex-wrap md:mt-0 mt-10">
        {footerLinks.map((footerlink) => (
          <div
            key={footerlink.title}
            className={`flex flex-col ss:my-0 my-4 min-w-[150px]`}
          >
            <h4 className="font-poppins font-medium text-[18px] leading-[27px] text-white">
              {footerlink.title}
            </h4>
            <ul className="list-none mt-4">
              {footerlink.links.map((link, index) => (
                <li
                  key={link.name}
                  className={`font-poppins font-normal text-[16px] leading-[24px] text-textColorSubtitle hover:text-secondaryColor cursor-pointer ${
                    index !== footerlink.links.length - 1 ? 'mb-4' : 'mb-0'
                  }`}
                >
                  <a href={link.link} target="_blank" rel="noreferrer">
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>

    <div className=" w-[1000px] flex justify-center items-center md:flex-row flex-col pt-6 border-t-[1px] border-t-[#ffffff]">
      <p className=" items-center font-poppins font-normal text-center text-[16px] leading-[27px] text-white">
        Privacy Policy | Terms & Conditions
      </p>
    </div>
  </section>
);

export default Footer;
