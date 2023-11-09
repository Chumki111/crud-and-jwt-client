import { useRef } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import './Banner.css'
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
import { useTypewriter } from 'react-simple-typewriter'

const Banner = () => {

  const [text] = useTypewriter({
    /* Config */
    words:['best cleaning services provider'],
    loop:{},
    typeSpeed:100,
    deleteSpeed:40
  })
  const [texts] = useTypewriter({
    /* Config */
    words:['best cleaning handyman provider'],
    loop:{},
    typeSpeed:100,
    deleteSpeed:40
  })
  const progressCircle = useRef(null);
    const progressContent = useRef(null);
    const onAutoplayTimeLeft = (s, time, progress) => {
      progressCircle.current.style.setProperty('--progress', 1 - progress);
      progressContent.current.textContent = `${Math.ceil(time / 1000)}s`;
    };
   
    return (

      <div className='h-[100%] lg:h-[600px]'>
      <Swiper
 spaceBetween={30}
 centeredSlides={true}
 autoplay={{
   delay: 2500,
   disableOnInteraction: false,
 }}
 pagination={{
   clickable: true,
 }}
 navigation={true}
 modules={[Autoplay, Pagination, Navigation]}
 onAutoplayTimeLeft={onAutoplayTimeLeft}
 className="h-[100%] lg:h-[600px]"
>
 

 <SwiperSlide>
     <div className='relative'>
         <img className='rounded-lg' src="https://i.ibb.co/QCK52cz/woman-with-question-gesture-plumber-looking-broken-faucet.jpg" alt="" />
         <div className='absolute rounded-lg top-0 left-0 w-full h-full '>
             <img src="https://i.ibb.co/ZxSgSy6/Rectangle-3.png" alt="" />
            </div>
            <div className='absolute top-[35%] left-[2rem] md:left-[3rem] lg:left-[30%] text-white space-y-8 pr-10 text-center'>
            <h1 className='text-4xl lg:text-5xl max-w-md font-bold  leading-[60px]'>We are the <br /> <span className='text-[#FF3811]'>{texts}</span></h1>
            <p className='max-w-md text-[#c9c4c4]'>There are many variations of passages of  available, but  the majority have suffered alteration in some form</p>
            <div>
            
             <button className=' border border-[#FF3811] px-4 py-3 rounded font-semibold '>get Started</button>
            </div>
         </div>
     </div>
     </SwiperSlide>
 <SwiperSlide>
 <div className='image relative'>
         <img className='rounded-lg' src="https://i.ibb.co/HqZZ95Y/chores-woman-cleaning-table-surfcase-with-disinfector.jpg" alt="" />
         <div className='absolute rounded-lg top-0 left-0 w-full h-full '>
             <img src="https://i.ibb.co/ZxSgSy6/Rectangle-3.png" alt="" />
            </div>
            <div className='absolute text-center top-[35%] left-[2rem] md:left-[3rem] lg:left-[30%] text-white space-y-8 pr-10'>
            <h1 className='text-4xl lg:text-5xl max-w-md font-bold  leading-[75px]'>We are the <span className='text-[#FF3811]'>{text}</span></h1>
            <p className='max-w-md text-[#c9c4c4]'>There are many variations of passages of  available, but  the majority have suffered alteration in some form</p>
            <div>
             
             <button className=' border border-[#FF3811] px-4 py-3 rounded font-semibold '>Get Started</button>
            </div>
         </div>
     </div>
 </SwiperSlide>
 
 
 <div className="autoplay-progress" slot="container-end">
   <svg viewBox="0 0 24 48" ref={progressCircle}>
     <circle cx="24" cy="24" r="20"></circle>
   </svg>
   <span ref={progressContent}></span>
 </div>
</Swiper>
 </div>
       

   

    );
};

export default Banner;