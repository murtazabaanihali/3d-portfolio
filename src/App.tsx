import {
    About,
    Contact,
    Hero,
    Navbar,
    Works,
    StarsCanvas
} from "./components";
import { useIsWebGLEnabled } from "./lib/utils/hooks";

const App = () => {
    const isWebglEnabled = useIsWebGLEnabled();

    return (
        <div className='relative z-0'>
            <div className='bg-hero-pattern bg-cover bg-no-repeat bg-center'>
                <Navbar />
                <Hero isWebglEnabled={isWebglEnabled} />
            </div>
            <About isWebglEnabled={isWebglEnabled} />
            <Works />
            <div className='relative z-0'>
                <Contact />
                <StarsCanvas isWebglEnabled={isWebglEnabled} />
            </div>
        </div>
    );
};

export default App;
