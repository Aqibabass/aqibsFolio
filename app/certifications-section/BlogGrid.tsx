import CertificationCard from "./BlogCard";
import { certificationDetails } from "./blogDetails";
import { motion } from "framer-motion";

const CertificationGrid = () => {
  return (
    <section className="relative z-10 flex w-full flex-col items-center justify-center overflow-hidden bg-[#0E1016] bg-grid-white/[0.2]">
      <div className="mt-10 flex w-full flex-col items-center justify-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{
            opacity: 1,
            y: 0,
            transition: {
              duration: 1,
              ease: [0.25, 0.25, 0, 1],
            },
          }}
          viewport={{ once: true }}
          className="mb-10 flex flex-col items-center justify-center lg:mb-20"
        >
          <h2 className="mb-5 text-[3rem] font-bold leading-tight tracking-tight lg:text-[4rem]">
            Experience
          </h2>
          <p className="w-[90%] text-center text-[16px] font-medium text-[#95979D] lg:w-[60%] lg:text-[18px]">
            Professional achievements and hands-on experience in software development and machine learning
          </p>
        </motion.div>

        <div className="grid w-[90%] max-w-[1400px] grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          {certificationDetails.map((certification, index) => (
            <CertificationCard key={index} {...certification} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default CertificationGrid;
