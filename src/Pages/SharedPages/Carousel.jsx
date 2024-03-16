import img1 from '../../assets/carousel-1.jpg';
import img2 from '../../assets/carousel-2.jpg';
import img3 from '../../assets/carousel-3.jpg';
import img4 from '../../assets/carousel-4.jpg';


const Carousel = () => {
    return (
        <div className='place-content-center mt-16'>
        <div className="carousel lg:w-full sm:w-full rounded-lg">
          <div id="slide1" className="carousel-item relative w-full">
                <img src={img1} className="w-full h-80" />
                <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                    <a href="#slide4" className="sm-btn text-slate-50">❮</a> 
                    <a href="#slide2" className="  text-slate-50">❯</a>
                </div>
            </div> 
          <div id="slide2" className="carousel-item relative w-full">
                <img src={img2} className="w-full h-80 " />
                <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                    <a href="#slide1" className=" text-slate-50">❮</a> 
                    <a href="#slide3" className=" text-slate-50">❯</a>
                </div>
          </div> 
          <div id="slide3" className="carousel-item relative w-full">
                <img src={img3} className="w-full h-80" />
                <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                    <a href="#slide2" className=" text-slate-50">❮</a> 
                    <a href="#slide4" className=" text-slate-50">❯</a>
                </div>
          </div> 
          <div id="slide4" className="carousel-item relative w-full">
                <img src={img4} className="w-full h-80" />
                <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                <a href="#slide3" className=" text-slate-50">❮</a> 
                <a href="#slide1" className=" text-slate-50">❯</a>
                </div>
          </div>
        </div>
    </div>
    );
};

export default Carousel;