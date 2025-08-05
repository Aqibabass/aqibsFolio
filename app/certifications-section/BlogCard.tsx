import { certificationProps } from "./blogDetails";
import Image from "next/image";
import { motion } from "framer-motion";
import "../globals.css";

const CertificationCard = ({ title, organization, image, date, description, index }: certificationProps) => {
  return (
    <motion.div
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
      className="relative flex h-[430px] w-[100%] max-w-[400px] flex-col items-center justify-start rounded-2xl bg-[#212531]"
    >
      <div className="mt-4 h-[100%] w-[90%] lg:mt-5 lg:w-[92%]">
        <div className="h-[45%] w-full md:h-[40%] flex items-center justify-center">
          <Image
            src={image}
            alt={organization}
            width={300}
            height={100}
            className="h-full w-full rounded-lg bg-contain bg-center object-contain"
          />
        </div>

        <h3 className="mt-3 text-xl font-bold break-words leading-tight tracking-tight">
          {title}
        </h3>
        
        <p className="mt-2 text-[#95979D] text-sm">
          {organization}
        </p>

        <p className="mt-4 text-[#95979D] text-sm line-clamp-3">
          {description}
        </p>
      </div>

      <div className="absolute bottom-0 mb-5 w-[90%] flex items-center justify-start text-[14px] font-medium text-[#95979D]">
        <p>{date}</p>
      </div>
    </motion.div>
  );
};

export default CertificationCard;
