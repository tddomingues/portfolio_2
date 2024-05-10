import SvgCss from "../../assets/css-3.svg";
import SvgHtml from "../../assets/html-1.svg";
import SvgJs from "../../assets/logo-javascript.svg";
import SvgReact from "../../assets/react-2.svg";
import SvgNode from "../../assets/nodejs-icon.svg";
import SvgMongoDb from "../../assets/mongodb-icon-1.svg";

const Tecnology = () => {
  return (
    <section className="bg-neutral-950 text-neutral-50 p-16">
      <h2 className=" font-semibold mb-4 text-xl">Tecnologias</h2>
      <div className=" rounded-lg p-8 flex items-center gap-8 bg-neutral-900 justify-center flex-wrap">
        <img src={SvgHtml} alt="" className="w-[100px]" />
        <img src={SvgCss} alt="" className="w-[100px]" />
        <img src={SvgJs} alt="" className="w-[100px]" />
        <img src={SvgReact} alt="" className="w-[100px]" />
        <img src={SvgNode} alt="" className="w-[100px]" />
        <img src={SvgMongoDb} alt="" className="w-[100px]" />
      </div>
    </section>
  );
};

export default Tecnology;
