import Footer from "../Components/Footer";
import Header from "../Components/Header";

const Quindl = () => {
  return (
    <div className="bg-white flex flex-col items-stretch pb-12">
      <div className="bg-neutral-950 flex w-full flex-col pl-20 pt-11 items-end max-md:max-w-full max-md:pl-5">
        <Header />
        <img
          loading="lazy"
          srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/64619f72d3f195db515380979691b6ab9f2d520209f1c9fd5688249d4cf987b0?apiKey=523a329b359546f087e663be5f0c596a&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/64619f72d3f195db515380979691b6ab9f2d520209f1c9fd5688249d4cf987b0?apiKey=523a329b359546f087e663be5f0c596a&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/64619f72d3f195db515380979691b6ab9f2d520209f1c9fd5688249d4cf987b0?apiKey=523a329b359546f087e663be5f0c596a&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/64619f72d3f195db515380979691b6ab9f2d520209f1c9fd5688249d4cf987b0?apiKey=523a329b359546f087e663be5f0c596a&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/64619f72d3f195db515380979691b6ab9f2d520209f1c9fd5688249d4cf987b0?apiKey=523a329b359546f087e663be5f0c596a&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/64619f72d3f195db515380979691b6ab9f2d520209f1c9fd5688249d4cf987b0?apiKey=523a329b359546f087e663be5f0c596a&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/64619f72d3f195db515380979691b6ab9f2d520209f1c9fd5688249d4cf987b0?apiKey=523a329b359546f087e663be5f0c596a&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/64619f72d3f195db515380979691b6ab9f2d520209f1c9fd5688249d4cf987b0?apiKey=523a329b359546f087e663be5f0c596a&"
          className="aspect-[1.79] object-contain object-center w-full overflow-hidden self-center max-w-[1211px] mt-6 max-md:max-w-full"
          alt=""
        />
      </div>
      <div className="self-center flex w-full max-w-[1087px] flex-col mt-16 mb-14 px-5 max-md:max-w-full max-md:my-10">
        <div className="self-center flex w-full max-w-[1087px] items-stretch justify-between gap-5 max-md:max-w-full max-md:flex-wrap">
          <div className="flex flex-col items-stretch pt-2.5 w-full md:w-1/2">
            <div className="text-black text-4xl font-bold whitespace-nowrap ml-2.5 mt-2.5 self-start">
              Quindl Technologies
            </div>
            <div className="items-stretch flex flex-col mt-4 p-2.5 max-md:max-w-full">
              <div className="text-black text-2xl font-bold max-md:max-w-full">
                INTRODUCTION
              </div>
              <div className="text-black text-base font-medium mt-5 max-md:max-w-full">
                Quindl is a SaaS based company based in Tamil Nadu, India. It
                provides consulting services, digital process automation, data
                analytics and much more.{" "}
              </div>
            </div>
            <div className="items-stretch flex flex-col mt-7 p-2.5 self-start">
              <div className="text-black text-2xl font-bold">COLLABORATORS</div>
              <div className="text-black text-base font-medium whitespace-nowrap mt-5">
                Dhanush (UX/UI Designer)
                <br />
                <br />
              </div>
            </div>
          </div>
          <div className="flex flex-col items-stretch self-end py-1 max-md:mt-10">
            <div className="items-stretch flex flex-col px-3 py-2.5">
              <div className="text-black text-2xl font-bold">MY ROLE</div>
              <div className="text-black text-base font-medium mt-5">
                UX Designer
                <br />
                Team Lead
              </div>
            </div>
            <div className="items-stretch flex flex-col mt-14 p-2.5">
              <div className="text-black text-2xl font-bold">Time</div>
              <div className="text-black text-base font-medium mt-5">
                Jan 2023 - Feb 2023
                <br />
                (Designing stage)
              </div>
            </div>
          </div>
        </div>
        <div className="items-stretch self-stretch flex flex-col mt-12 pt-5 pb-3 px-2.5 max-md:max-w-full max-md:mt-10">
          <div className="text-black text-4xl font-bold max-md:max-w-full">
            Design Process
          </div>
          <div className="text-black text-justify text-base font-medium mt-7 max-md:max-w-full">
            We wanted the visitors of the website to know who we are as a
            company, our commitment to our clients and give them a feel of
            professionalism. Furthermore, we analyzed user behavior that guided
            us in strategically placing CTAs throughout the website and
            marketing materials, ensuring they appear at points of peak interest
            and decision-making.
          </div>
        </div>
        <img
          loading="lazy"
          srcSet="images/Quindl/flowchart.png"
          className="aspect-[2.16] object-contain object-center w-full overflow-hidden self-center max-w-[1013px] mt-8 max-md:max-w-full"
          alt=""
        />
        <div className="items-stretch self-stretch flex flex-col mt-12 pt-5 px-2.5 max-md:max-w-full max-md:mt-10">
          <div className="text-black text-4xl font-bold max-md:max-w-full">
            Typography
          </div>
          <div className="text-black text-justify text-base font-medium mt-2.5 max-md:max-w-full">
            Bebas Neue is a thick, geometric sans-serif font that makes a strong
            visual impression. We felt that it made our website stand out from
            the crowd. Despite its bold appearance, Bebas Neue is a relatively
            clean and legible font. It gave a minimalist look that we were
            looking for and we pared it along with Lato which provided a clear
            and functional contrast for body text, resulting in a balanced and
            user-friendly reading experience. <br />
          </div>
        </div>
        <img
          loading="lazy"
          srcSet="images/Quindl/font_1.png"
          className="aspect-[5.13] object-contain object-center w-[600px] overflow-hidden self-center max-w-full mt-8"
          alt=""
        />
        <img
          loading="lazy"
          srcSet="images/Quindl/font_2.png"
          className="aspect-square object-contain object-center w-[600px] overflow-hidden self-center max-w-full mt-5"
          alt=""
        />
        <div className="items-stretch self-stretch flex flex-col mt-12 pt-5 pb-3 px-2.5 max-md:max-w-full max-md:mt-10">
          <div className="text-black text-4xl font-bold max-md:max-w-full">
            Colour Palette
          </div>
          <div className="text-black text-justify text-base font-medium mt-7 max-md:max-w-full">
            We went with a dark theme for the website, and a mix of colours for
            the text, buttons and other elements from the logo. Initially we
            planned to go with simple and colours, but we embraced creative
            exploration, ultimately achieving a cohesive and visually engaging
            user experience.
          </div>
        </div>
        <img
          loading="lazy"
          srcSet="images/Quindl/color_q.png"
          className="aspect-[2.99] object-contain object-center w-full overflow-hidden self-stretch mt-8 max-md:max-w-full"
          alt=""
        />
        <img
          loading="lazy"
          srcSet="images/Quindl/components_q.png"
          className="aspect-[1.22] object-contain object-center w-full overflow-hidden self-stretch mt-8 max-md:max-w-full"
          alt=""
        />
        <div className="items-stretch self-stretch flex flex-col mt-12 pt-5 pb-8 px-2.5 max-md:max-w-full max-md:mt-10">
          <div className="text-black text-4xl font-bold max-md:max-w-full">
            Prototype and Design
          </div>
          <div className="text-black text-justify text-base font-medium mt-12 max-md:max-w-full max-md:mt-10">
            I planned to create a minimalistic design which will be familiar to
            the user. I sketched some ideas and ended up with a prototype.
          </div>
        </div>
        <img
          loading="lazy"
          srcSet="images/Quindl/part_1.png"
          className="aspect-[1.02] object-contain object-center w-full overflow-hidden self-stretch mt-5 max-md:max-w-full"
          alt=""
        />
        <img
          loading="lazy"
          srcSet="images/Quindl/part_2.png"
          className="aspect-[1.06] object-contain object-center w-full overflow-hidden self-stretch mt-20 max-md:max-w-full max-md:mt-10"
          alt=""
        />
      </div>
      <Footer />
    </div>
  );
};

export default Quindl;
