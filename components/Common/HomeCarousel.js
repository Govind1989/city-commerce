import { useEffect, useState } from "react";

const HomeCarousel = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const loopSlider = () => {
      const interval = setInterval(() => {
        setCurrentSlide((prevSlide) => (prevSlide === 0 ? 1 : 0));
      }, 5000);
      return () => clearInterval(interval);
    };

    const intervalId = loopSlider();
    return () => clearInterval(intervalId);
  }, []);

  const handleSliderButton1 = () => {
    setCurrentSlide(0);
  };

  const handleSliderButton2 = () => {
    setCurrentSlide(1);
  };

  return (
    <div className="relative">
      <div className="sliderAx h-auto">
        <div
          className={`container-fluid mx-auto ${
            currentSlide === 0 ? "block" : "hidden"
          }`}
        >
          <div
            className="bg-cover bg-center h-auto text-gray-400 py-24 px-10 object-fill"
            style={{
              backgroundImage:
                "url(https://elyssi.redpixelthemes.com/assets/img/unlicensed/hero-slide-04.jpg)",
            }}
          >
            <div className="md:w-1/2">
              <p className="font-bold text-sm uppercase">
                #Women&apos;s Clothing
              </p>
              <p className="text-3xl font-bold">Summer Collections</p>
              <p className="text-2xl mb-10 leading-none">
                Prepare this summer for Beautiful you . .
              </p>
              <Link
                href="#"
                className="bg-gray-800 py-4 px-8 text-white font-bold uppercase text-xs rounded hover:bg-gray-200 hover:text-gray-800"
              >
                Shop now
              </Link>
            </div>
          </div>
          <br />
        </div>

        <div
          className={`container-fluid mx-auto ${
            currentSlide === 1 ? "block" : "hidden"
          }`}
        >
          <div
            className="bg-cover bg-top h-auto text-gray-400 py-24 px-10 object-fill"
            style={{
              backgroundImage:
                "url(https://elyssi.redpixelthemes.com/assets/img/unlicensed/hero-slide-01.jpg)",
            }}
          >
            <p className="font-bold text-sm uppercase">#Men&apos;s Clothing</p>
            <p className="text-3xl font-bold">Formal Wear</p>
            <p className="text-2xl mb-10 leading-none">
              Get Comfortable with Formal Elegance
            </p>
            <Link
              href="#"
              className="bg-gray-800 py-4 px-8 text-white font-bold uppercase text-xs rounded hover:bg-gray-200 hover:text-gray-800"
            >
              Shop Now
            </Link>
          </div>
          <br />
        </div>
      </div>
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex justify-between w-8 mx-auto">
        <button
          onClick={handleSliderButton1}
          className={`rounded-full w-3 h-3 ${
            currentSlide === 0 ? "bg-gray-800" : "bg-gray-400"
          }`}
        />
        <button
          onClick={handleSliderButton2}
          className={`rounded-full w-3 h-3 ${
            currentSlide === 1 ? "bg-gray-800" : "bg-gray-400"
          }`}
        />
      </div>
    </div>
  );
};

export default HomeCarousel;
