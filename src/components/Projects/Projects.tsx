import CinebaseImage from "../../assets/cinebaseImage.png";
import OrganizeImage from "../../assets/organizeImage.png";
import NexGenImage from "../../assets/nexgenImage.png";
import { Button } from "../ui/button";

import SvgCss from "../../assets/css-3.svg";
import SvgHtml from "../../assets/html-1.svg";
import SvgJs from "../../assets/logo-javascript.svg";
import SvgReact from "../../assets/react-2.svg";
import SvgNode from "../../assets/nodejs-icon.svg";
import SvgMongoDb from "../../assets/mongodb-icon-1.svg";
import SvgStyledComponents from "../../assets/styledcomponents.svg";
import TmdbImage from "../../assets/tmdb.png";

const Projects = () => {
  return (
    <section className="bg-neutral-900 px-32 py-16 text-neutral-50 md:px-8">
      <h2 className="font-semibold mb-4 text-xl">Projetos</h2>
      <div className="bg-neutral-950 p-8 rounded-lg md:p-4">
        <h3 className="font-semibold mb-1 text-sm">
          Projeto Full Stack "Organize"
        </h3>
        <img
          src={OrganizeImage}
          alt="Imagem do projeto chamado Organize (gerenciador de tarefas)"
          className="w-[600px]"
        />
        <p className="text-sm mt-1">Projeto de gerenciamento de tarefas.</p>
        <div className="flex items-center gap-4 mt-4">
          <img src={SvgReact} alt="" className="w-[30px]" />
          <img src={SvgNode} alt="" className="w-[30px]" />
          <img src={SvgMongoDb} alt="" className="w-[30px]" />
          <img src={SvgStyledComponents} alt="" className="w-[30px]" />
        </div>
        <div className="mt-4 flex items-center gap-4">
          <Button
            onClick={() =>
              (window.location.href =
                "https://github.com/tddomingues/fullstack-lista-de-tarefas")
            }
          >
            GitHub
          </Button>
        </div>
      </div>
      <div className="bg-neutral-950 p-8 rounded-lg mt-10 md:p-4">
        <h3 className="font-semibold mb-1 text-sm">Cinebase</h3>
        <img
          src={CinebaseImage}
          alt="Imagem do projeto chamado Organize (gerenciador de tarefas)"
          className="w-[600px]"
        />
        <p className="text-sm mt-1">
          Projeto com catálogos de filmes. O consumo da api de filmes - TMDB -
          trazem todos os filmes registrados na TMDB.
        </p>
        <div className="flex items-center gap-4 mt-4">
          <img src={SvgReact} alt="" className="w-[30px]" />
          <img src={TmdbImage} alt="" className="w-[30px]" />
          <img src={SvgStyledComponents} alt="" className="w-[30px]" />
        </div>
        <div className="mt-4 flex items-center gap-4">
          <Button
            onClick={() =>
              (window.location.href = "https://github.com/tddomingues/cinebase")
            }
          >
            GitHub
          </Button>
          <Button
            onClick={() =>
              (window.location.href = "https://cinebase-five.vercel.app/")
            }
          >
            Visitar
          </Button>
        </div>
      </div>
      <div className="bg-neutral-950 p-8 rounded-lg mt-10 md:p-4">
        <h3 className="font-semibold mb-1 text-sm">Landing Page "NexGen"</h3>
        <img
          src={NexGenImage}
          alt="Imagem do projeto chamado Organize (gerenciador de tarefas)"
          className="w-[600px]"
        />
        <p className="text-sm mt-1">Projeto completo de front-end.</p>
        <div className="flex items-center gap-4 mt-4">
          <img src={SvgReact} alt="" className="w-[30px]" />
          <img src={SvgStyledComponents} alt="" className="w-[30px]" />
        </div>
        <div className="mt-4 flex items-center gap-4">
          <Button
            onClick={() =>
              (window.location.href = "https://github.com/tddomingues/nexgen")
            }
          >
            GitHub
          </Button>
          <Button
            onClick={() =>
              (window.location.href =
                "https://nexgen-git-main-tddomingues.vercel.app/")
            }
          >
            Visitar
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Projects;
