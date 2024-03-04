import img1 from '../../assets/carousel-1.png';
import img2 from '../../assets/carousel-2.jpg';
import img3 from '../../assets/carousel-3.jpg';
import img4 from '../../assets/carousel-4.jpg';


const Carousel = () => {
    return (
        <div className='bg-blue-300'>
        <div className="carousel lg:w-3/4 sm:w-full">
          <div id="slide1" className="carousel-item relative w-full">
                <img src={img1} className="w-full h-80" />
                <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                    <a href="#slide4" className=" ">❮</a> 
                    <a href="#slide2" className=" ">❯</a>
                </div>
            </div> 
          <div id="slide2" className="carousel-item relative w-full">
                <img src={img2} className="w-full h-80" />
                <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                    <a href="#slide1" className="">❮</a> 
                    <a href="#slide3" className="">❯</a>
                </div>
          </div> 
          <div id="slide3" className="carousel-item relative w-full">
                <img src={img3} className="w-full h-80" />
                <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                    <a href="#slide2" className="">❮</a> 
                    <a href="#slide4" className="">❯</a>
                </div>
          </div> 
          <div id="slide4" className="carousel-item relative w-full">
                <img src={img4} className="w-full h-80" />
                <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                <a href="#slide3" className="">❮</a> 
                <a href="#slide1" className="">❯</a>
                </div>
          </div>
        </div>
    </div>
    );
};

export default Carousel;