import Image from "next/image";

export default function Landing_Top() {
  const hero_content = {
    h1: "IIT BHU",
    h2: "Study Portal",
    description:
      "A One Stop solution to all your academic ailments",
    hero_image: {
      alt: "Hero Image",
      path: "/landing/Untitled.png",
    },
  };
  return (
    <>
      <nav />
      <section className="w-full bg-white">
        <div className=" flex justify-between rounded-l-lg bg-landing">
          {/* Left Content */}
          <div className="mx-auto">
            <h1
              className={`text-5xl font-bold text-white lg:text-7xl`}
            >
              {hero_content?.h1}
            </h1>

            <h2 className={`text-5xl font-bold text-white lg:text-7xl`}
            >
              {hero_content?.h2}
            </h2>
            <br/>
            <p className="max-w-lg text-xl text-white">
              {hero_content?.description}
            </p>
            {/* <div>
              <button className="rounded-lg bg-dark-blue px-8 py-4 font-medium text-white transition hover:bg-dark-blue/90">
                {hero_content?.cta}
              </button>
            </div> */}
          </div>

          {/* Right Image */}
          <div className="sm:invisible md:visible lg:visible">
            <Image
              className="rounded-br-full"
              src={hero_content?.hero_image?.path}
              alt={hero_content?.hero_image?.alt}
              width={700}
              height={750}
              priority
            />
          </div>
        </div>
      </section>
     
    </>
  );
}