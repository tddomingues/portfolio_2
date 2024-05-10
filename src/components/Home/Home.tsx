import { IoIosArrowRoundDown } from "react-icons/io";
import { ImLinkedin2, ImGithub } from "react-icons/im";
import { Button } from "../ui/button";

const Home = () => {
  return (
    <section className="bg-neutral-950 h-[500px] justify-center flex flex-col text-neutral-50 px-16 py-8 relative ">
      <div className="">
        <p className="text-sm mb-1 text-neutral-200">
          Desenvolvedor Full Stack
        </p>
        <p className="text-4xl font-bold mb-4">Olá, sou o Tiago</p>
        <Button variant="secondary">
          Veja Mais{" "}
          <span className="ml-2">
            <IoIosArrowRoundDown className="text-xl mb-[1px]" />
          </span>
        </Button>
      </div>

      <div className="absolute right-16 top-0 flex flex-col justify-center  h-full gap-4 text-xl ">
        <span className="cursor-pointer">
          <ImLinkedin2 />
        </span>
        <span className="cursor-pointer">
          <ImGithub />
        </span>
      </div>
    </section>
  );
};

export default Home;
