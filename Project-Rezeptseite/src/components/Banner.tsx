import bannerImage from "../assets/images/hero.jpg";

const Banner = () => {
  return (
    <div>
      <div className="relative">
        <div
          className="h-[362px] md:h-[400px] bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: `url(${bannerImage})`,
          }}
        >
          <div className="absolute inset-0 bg-black/50 flex items-center justify-center">
            <div className="max-w-3xl px-6 text-center">
              <h1 className="text-white text-[40px] md:text-3xl lg:text-4xl font-semibold">
                Lassen Sie sich inspirieren, kochen Sie mit Leidenschaft und
                erleben Sie unvergessliche Momente bei Tisch.
              </h1>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
