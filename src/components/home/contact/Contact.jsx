import { roboto_500, roboto_700 } from "@/app/fonts";
import { footerContact, socialMedia } from "@/config/Constant";
import clsx from "clsx";

const Contact = () => {
  return (
    <div
      className={clsx("mt-10 mb-6 px-4 md:mt-[70px] md:mb-[30px] md:px-[80px]")}
    >
      <div className="flex justify-center">
        <div>
          <h2
            className={clsx(
              "text-center text-2xl md:text-[28px] text-theme-black",
              roboto_700
            )}
          >
            Contact us
          </h2>
          <div
            className={clsx(
              "flex justify-center items-center gap-2 text-base md:text-[14px] text-theme-green",
              roboto_500.className
            )}
          >
            <div className="bg-theme-red w-10 h-[2px]"></div>
            <div>how you contact us</div>
            <div className="bg-theme-red w-10 h-[2px]"></div>
          </div>
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 mt-2 md:mt-[10px]">
        <div className="col-span-1 items-start">
          <img src="/img/logowithslogan.png" alt="Logo with Slogan" />
          <div className="flex justify-center items-center gap-5 mt-6">
            {socialMedia.map((social, index) => (
              <a
                key={index}
                href={social.url}
                alt={social.name}
                target="_blank"
                rel="noopener noreferrer"
              >
                <img
                  className="h-10 w-10"
                  src={social.icon}
                  alt={social.name}
                />
              </a>
            ))}
          </div>
        </div>
        <div className="col-span-1 flex justify-center mt-6 md:mt-0">
          <div>
            {footerContact.map((item, index) => (
              <div
                key={index}
                className="flex justify-start items-center mb-12 gap-5"
              >
                <div>
                  <img src={item.icon} alt={item.name} className="h-10 w-10" />
                </div>
                <div>
                  <div
                    className={clsx("text-lg capitalize", roboto_700.className)}
                  >
                    {item.name}
                  </div>
                  <div className={clsx("text-lg", roboto_500.className)}>
                    {item.value}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
