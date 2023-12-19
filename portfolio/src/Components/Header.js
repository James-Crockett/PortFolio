import { Link } from "react-router-dom";

const Header = () => {
  const ResumeViewer = () => {
    window.open("docs/Resume.pdf", "_blank");
  };

  return (
    <div className="flex w-[406px] max-w-full items-stretch justify-between gap-8 mr-16 max-md:justify-center max-md:mr-2.5">
      <Link to={"/"}>
        <button className="text-pink-500 hover:underline underline-offset-4 decoration-2 text-xl font-bold">Portfolio</button>
      </Link>
      <Link to={"/about"}>
        <button className="text-pink-500 hover:underline underline-offset-4 decoration-2 text-xl font-bold">About</button>
      </Link>
      <button
        className="text-pink-500 hover:underline underline-offset-4 decoration-2 text-xl font-bold"
        onClick={ResumeViewer}
      >
        Resume
      </button>
    </div>
  );
};

export default Header;
