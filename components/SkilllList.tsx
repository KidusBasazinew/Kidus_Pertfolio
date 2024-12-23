import { motion } from "framer-motion";
import Image from "next/image";

interface Props {
  src: string;
  skill: string;
  index: number;
}

const fadeInAnimation = {
  initial: {
    opacity: 0,
    y: 100,
  },
  animate: (index: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: 0.05 * index,
    },
  }),
};

function SkillList({ src, skill, index }: Props) {
  return (
    <motion.span
      className="flex items-center gap-x-2"
      variants={fadeInAnimation}
      initial="initial"
      whileInView="animate"
      viewport={{ once: true, amount: 0.2 }}
      custom={index}
    >
      <Image src={src} alt="Checkmark icon" width={12} height={12} />
      <p className="text-sm text-gray-700">{skill}</p>
    </motion.span>
  );
}

export default SkillList;
