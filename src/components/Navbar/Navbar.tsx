const Navbar = () => {
  return (
    <header className="flex items-center gap-10 bg-neutral-950 px-16 py-4 text-neutral-50">
      <a href="#" className="font-bold text-2xl">
        Portfólio
      </a>
      <ul className="flex justify-between items-center gap-4 font-light text-sm">
        <li>
          <a href="#">Início</a>
        </li>
        <li>
          <a href="#">Sobre Mim</a>
        </li>
        <li>
          <a href="#">Tecnologias</a>
        </li>
        <li>
          <a href="#">Projetos</a>
        </li>
      </ul>
    </header>
  );
};

export default Navbar;
