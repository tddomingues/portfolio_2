import CinebaseImage from "../../assets/cinebaseImage.png";
import OrganizeImage from "../../assets/organizeImage.png";
import NexGenImage from "../../assets/nexgenImage.png";
import { Button } from "../ui/button";

const Projects = () => {
  return (
    <section className="bg-neutral-900 p-16 text-neutral-50 ">
      <h2 className="font-semibold mb-4 text-xl">Projetos</h2>
      <div className="bg-neutral-950 p-8 rounded-lg">
        <h3 className="font-semibold mb-1 text-sm">
          Projeto Full Stack "Organize"
        </h3>
        <img
          src={OrganizeImage}
          alt="Imagem do projeto chamado Organize (gerenciador de tarefas)"
          className="w-[600px]"
        />
        <p className="text-sm mt-1">Projeto de gerenciamento de tarefas.</p>
        <p className="text-sm mt-1">
          Reactjs + Nodejs + Express + Mongodb + Styled Components
        </p>
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
      <div className="bg-neutral-950 p-8 rounded-lg mt-10">
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
        <p className="text-sm mt-1">Reactjs + Api TMDB + Styled Components</p>
        <div className="mt-4 flex items-center gap-4">
          <Button
            onClick={() =>
              (window.location.href = "https://cinebase-five.vercel.app/")
            }
          >
            GitHub
          </Button>
          <Button
            onClick={() =>
              (window.location.href = "https://github.com/tddomingues/cinebase")
            }
          >
            Visitar
          </Button>
        </div>
      </div>
      <div className="bg-neutral-950 p-8 rounded-lg mt-10">
        <h3 className="font-semibold mb-1 text-sm">Landing Page "NexGen"</h3>
        <img
          src={NexGenImage}
          alt="Imagem do projeto chamado Organize (gerenciador de tarefas)"
          className="w-[600px]"
        />
        <p className="text-sm mt-1">Projeto completo de front-end.</p>
        <p className="text-sm mt-1">Reactjs + Styled Components</p>
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
