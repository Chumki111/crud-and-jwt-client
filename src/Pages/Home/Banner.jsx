import { useRef } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import './Banner.css'
import { Autoplay, Pagination, Navigation } from 'swiper/modules';

// import img1 from '../../assets/medium.avif';
import img2 from '../../assets/240.jpg'



const Banner = () => {
  const progressCircle = useRef(null);
  const progressContent = useRef(null);
  const onAutoplayTimeLeft = (s, time, progress) => {
    progressCircle.current.style.setProperty('--progress', 1 - progress);
    progressContent.current.textContent = `${Math.ceil(time / 1000)}s`;
  };
   
    return (

      <div className='h-[100%] lg:h-[700px]'>
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
 className="h-[100%] lg:h-[700px]"
>
 <SwiperSlide className=''>
     <div className='relative'>
         <img className='rounded-lg' src='https://i.ibb.co/g4qK0RM/3.jpg' alt="" />
         <div className='absolute top-0 left-0 w-full rounded-lg h-[50%] '>
             <img src={img2} alt="" />
            </div>
         <div className='absolute top-[30%] left-[2rem] md:left-[3rem] lg:left-[8rem] text-white space-y-8 pr-10 text-start'>
            <h1 className='text-4xl lg:text-5xl max-w-md font-bold  leading-[60px]'>Affordable <br /> Price For Car Servicing</h1>
            <p className='max-w-md text-[#c9c4c4]'>There are many variations of passages of  available, but  the majority have suffered alteration in some form</p>
            <div>
             <button className=' text-white bg-[#FF3811] px-4 py-3 rounded font-semibold mr-6 '>Discover More</button>
             <button className=' border border-[#FFF] px-4 py-3 rounded font-semibold '>Latest Project</button>
            </div>
         </div>
     </div>
 </SwiperSlide>
 
 <SwiperSlide>
     <div className='relative'>
         <img className='rounded-lg' src="https://i.ibb.co/g4qK0RM/3.jpg" alt="" />
         <div className='absolute rounded-lg top-0 left-0 w-full h-full '>
             <img src="https://i.ibb.co/ZxSgSy6/Rectangle-3.png" alt="" />
            </div>
            <div className='absolute top-[30%] left-[2rem] md:left-[3rem] lg:left-[8rem] text-white space-y-8 pr-10 text-start'>
            <h1 className='text-4xl lg:text-5xl max-w-md font-bold  leading-[60px]'>Affordable <br /> Price For Car Servicing</h1>
            <p className='max-w-md text-[#c9c4c4]'>There are many variations of passages of  available, but  the majority have suffered alteration in some form</p>
            <div>
             <button className=' text-white bg-[#FF3811] px-4 py-3 rounded font-semibold mr-6 '>Discover More</button>
             <button className=' border border-[#FFF] px-4 py-3 rounded font-semibold '>Latest Project</button>
            </div>
         </div>
     </div>
     </SwiperSlide>
 <SwiperSlide>
 <div className='image relative'>
         <img className='rounded-lg' src="https://i.ibb.co/r38CDYS/4.jpg" alt="" />
         <div className='absolute rounded-lg top-0 left-0 w-full h-full '>
             <img src="https://i.ibb.co/ZxSgSy6/Rectangle-3.png" alt="" />
            </div>
            <div className='absolute top-[30%] left-[2rem] md:left-[3rem] lg:left-[8rem] text-white space-y-8 pr-10 text-start'>
            <h1 className='text-4xl lg:text-5xl max-w-md font-bold  leading-[75px]'>Affordable <br /> Price For Car Servicing</h1>
            <p className='max-w-md text-[#c9c4c4]'>There are many variations of passages of  available, but  the majority have suffered alteration in some form</p>
            <div>
             <button className=' text-white bg-[#FF3811] px-4 py-3 rounded font-semibold mr-6 '>Discover More</button>
             <button className=' border border-[#FFF] px-4 py-3 rounded font-semibold '>Latest Project</button>
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