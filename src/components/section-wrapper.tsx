import { motion } from "framer-motion";

import { styles } from "../styles";
import { staggerContainer } from "../lib/utils/motion";

const SectionWrapper = <T extends {}>(
    Component: React.FC<T> | React.ComponentClass<T>,
    id: string
) => {
    return function (props: T) {
        return (
            <motion.section
                variants={staggerContainer()}
                initial='hidden'
                whileInView='show'
                viewport={{ once: true, amount: 0.25 }}
                className={`${styles.padding} max-w-[104rem] mx-auto relative z-0`}
            >
                <span className='hash-span' id={id}>
                    &nbsp;
                </span>
                <Component {...props} />
            </motion.section>
        );
    };
};

export default SectionWrapper;