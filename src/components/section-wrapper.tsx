import { cn } from "../lib/utils";
import { styles } from "../styles";

const SectionWrapper = <T extends {}>(
    Component: React.FC<T> | React.ComponentClass<T>,
    id: string
) => {
    return function (props: T) {
        return (
            <section
                className={cn(styles.padding, "max-w-[104rem] mx-auto relative z-0")}
            >
                <span className='hash-span' id={id}>
                    &nbsp;
                </span>
                <Component {...props} />
            </section>
        );
    };
};

export default SectionWrapper;