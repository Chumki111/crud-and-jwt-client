
import { useTypewriter } from 'react-simple-typewriter'
const TypeWriter = () => {
    const [text] = useTypewriter({
        /* Config */
        words:[' Welcome to our offline services'],
        loop:{},
        typeSpeed:100,
        deleteSpeed:40
      })
    return (
        
             <div className="text-center">
                 <h1 className="text-[#FF3811] font-bold text-4xl">Hello, <br /> <span className="text-black">{text}</span></h1>
                 <p className="py-5 text-xl font-semibold">Search Your Service</p>
            </div>
        
    );
};

export default TypeWriter;