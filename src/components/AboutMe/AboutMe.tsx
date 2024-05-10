//imagens
import Perfil from "../../assets/perfil.png";

//components
import { Button } from "../ui/button";

//icons
import { IoIosArrowRoundDown } from "react-icons/io";
import { ImLinkedin2, ImGithub } from "react-icons/im";
import { HiOutlineMail, HiOutlineDeviceMobile } from "react-icons/hi";

const AboutMe = () => {
  return (
    <section className="bg-neutral-950 px-32 py-16 text-neutral-50 relative md:px-8">
      <div className="flex items-center gap-2 md:flex-col md:mb-4">
        <img src={Perfil} alt="" />
        <div>
          <h3 className="text-sm mb-1 text-neutral-200 font-semibold">
            Desenvolvedor Full Stack
          </h3>
          <p className="text-sm place-self-center">
            Prazer, meu nome é <span>Tiago</span>, tenho 25 anos, resíduo em
            Maringá, no Paraná, e sou apaixonado por tecnologia. Para manter
            contato com a Era Digital, abandonei o curso de Biomedicina para
            ingressar em
            <span> Engenharia de Software</span>. Atualmente, dedico-me
            diariamente a aprimorar minhas habilidades Full Stack, com o
            objetivo de ingressar no mercado de trabalho na melhor forma
            possível para que eu possa crescer profissionalmente e colaborar em
            projetos.
          </p>
          <Button variant="secondary" className="mt-4">
            Meu Projetos{" "}
            <span className="ml-2">
              <IoIosArrowRoundDown className="text-xl mb-[1px]" />
            </span>
          </Button>
        </div>
      </div>
      <div className=" flex gap-4 justify-between items-center">
        <div>
          <div className="flex items-center gap-2">
            <HiOutlineMail className="text-2xl " />
            <span className="text-sm">tiago3d2s3@gmail.com</span>
          </div>
          <div className="flex items-center gap-2 mt-2">
            <HiOutlineDeviceMobile className="text-2xl " />
            <span className="text-sm">(44) 99128 - 9326</span>
          </div>
        </div>
        <div className="text-2xl flex items-center gap-4">
          <span
            className="cursor-pointer "
            onClick={() =>
              (window.location.href =
                "https://www.linkedin.com/in/tiago3domingues/")
            }
          >
            <ImLinkedin2 />
          </span>
          <span
            className="cursor-pointer b"
            onClick={() =>
              (window.location.href = "https://github.com/tddomingues")
            }
          >
            <ImGithub />
          </span>
        </div>
      </div>
    </section>
  );
};

export default AboutMe;
