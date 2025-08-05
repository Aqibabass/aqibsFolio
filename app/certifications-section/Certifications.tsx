import { certificationDetails } from "../blog-section/blogDetails";
import AnimatedWords2 from "../animations/AnimatedWords2";
import { monaSans } from "../fonts/monaSans";
import AnimatedBody from "../animations/AnimatedBody";
import { motion } from "framer-motion";

const Certifications = () => {
  return (
    <section className="z-10 flex w-full flex-col items-center justify-center overflow-hidden bg-[#0E1016] bg-cover bg-center pt-20 md:pb-16 lg:pb-24">
      <div className={`relative mb-16 flex w-full flex-col items-center justify-center gap-10 text-[#e4ded7] sm:items-center lg:max-w-[1440px]`}>
        <AnimatedWords2
          title={"Experience"}
          style={`flex max-w-[500px] flex-col items-start text-left pr-5 ${monaSans.className} font-extrabold uppercase leading-[0.9em] text-[#e4ded7] sm:max-w-full sm:flex-row sm:items-center sm:justify-center sm:text-center lg:text-center text-[clamp(70px,14vw,155.04px)]`}
        />
        <AnimatedBody
          text="Professional Experience and Technical Certifications Showcasing My Journey"
          className="w-[90%] text-center text-[14px] font-semibold uppercase sm:w-[500px] md:w-[550px] md:text-[16px]"
        />
      </div>
      <motion.div className="grid w-[90%] max-w-[1345px] grid-cols-1 grid-rows-2 place-content-center place-items-center gap-x-6 gap-y-6 sm:grid-cols-2 lg:grid-cols-2">
        {certificationDetails.map((certification, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 10 }}
            whileInView={{
              opacity: 1,
              y: 0,
              transition: {
                duration: 0.7,
                delay: 0.1 * index,
                ease: [0.44, 0, 0.22, 0.99],
              },
            }}
            viewport={{
              amount: "some",
              once: true,
            }}
            className="relative flex h-[300px] w-full flex-col items-start justify-between rounded-[23px] border-[3px] border-[#212531] bg-transparent p-[28px] sm:h-[320px] lg:h-[320px] overflow-hidden"
          >
            <div className="flex w-full items-center justify-between relative z-10">
              <h3 className="text-[24px] font-bold uppercase text-[#e4ded7]">
                {certification.title}
              </h3>
            </div>
            <div className="flex flex-col gap-2 relative z-10">
              <p className="text-[18px] font-[500] leading-relaxed tracking-wide text-[#e4ded7] line-clamp-3 bg-[#0E1016]/80 p-2 rounded">
                {certification.description}
              </p>
              <div className="flex flex-col gap-1 mt-auto bg-[#0E1016]/80 p-2 rounded">
                <p className="text-[16px] font-[500] text-[#95979D] truncate">
                  {certification.organization}
                </p>
                <p className="text-[14px] font-[500] text-[#95979D]">
                  {certification.date}
                </p>
              </div>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
};

export default Certifications;