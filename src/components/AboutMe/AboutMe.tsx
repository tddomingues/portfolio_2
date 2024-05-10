import Perfil from "../../assets/perfil.png";

const AboutMe = () => {
  return (
    <section className="bg-neutral-900 p-16 text-neutral-50 ">
      <h2 className=" font-semibold mb-4 text-xl">Sobre Mim</h2>
      <div className="flex items-start gap-2">
        <img src={Perfil} alt="" />
        <p className="text-sm place-self-center">
          Prazer, meu nome é <span>Tiago</span>, tenho 25 anos, resíduo em
          Maringá, no Paraná, e sou apaixonado por tecnologia. Para manter
          contato com a Era Digital, abandonei o curso de Biomedicina para
          ingressar em
          <span> Engenharia de Software</span>. Atualmente, dedico-me
          diariamente a aprimorar minhas habilidades Full Stack, com o objetivo
          de ingressar no mercado de trabalho na melhor forma possível para que
          eu possa crescer profissionalmente e colaborar em projetos.
        </p>
      </div>
    </section>
  );
};

export default AboutMe;
