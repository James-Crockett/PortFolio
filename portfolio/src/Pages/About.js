import Footer from "../Components/Footer";
import Header from "../Components/Header";

const About = () => {
  const ResumeViewer = () => {
    window.open("docs/Resume.pdf", "_blank");
  };

  return (
    <div className="bg-[#0D1014] flex flex-col pl-20 py-11 items-end max-md:px-5">
      <Header />
      <div className="self-center flex w-full max-w-[1255px] flex-col items-stretch mt-20 mb-4 max-md:max-w-full max-md:mt-10">
        <div className="text-cyan-400 text-6xl font-bold max-md:max-w-full max-md:text-4xl">
          About me
        </div>
        <div className="text-green-300 text-2xl font-medium w-full max-w-full ml-2.5 mt-9 self-start">
          My journey began with tinkering in the world of information
          technology, where I fell in love with the power of code and design.
          But my studies in B.Tech. IT soon opened my eyes to a bigger picture:
          the vital role design plays in shaping user experiences. That's when
          my passion for UX/UI blossomed. This passion took me further, leading
          me to champion inclusive design and advocate for accessibility. And
          now, as Creative Director at Quindl Technologies, I get to translate
          my research-fueled ideas into reality, building products that are not
          just beautiful, but also thoughtfully crafted for everyone. So,
          whether it's dissecting design trends or diving deep into user
          research, I'm always on a quest for knowledge. Let's explore the
          possibilities together!{" "}
        </div>
        <button
          className="text-teal-100 text-md mb-8 font-medium whitespace-nowrap justify-center items-stretch bg-orange-600 mt-16 p-3 rounded-lg self-start max-md:mt-8"
          onClick={ResumeViewer}
        >
          View My Resume
        </button>
        <Footer />
      </div>
    </div>
  );
};

export default About;
