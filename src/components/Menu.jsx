import {
  IconAbc,
  IconAddressBook,
  IconAirBalloon,
  IconApple,
  IconBrandReact,
  IconHome,
  IconInfoCircle,
  IconRouteAltLeft,
  IconSquareRoundedNumber1,
  IconSquareRoundedNumber2,
  IconSquareRoundedNumber3,
  IconSquareRoundedNumber4,
  IconSquareRoundedNumber5,
  IconSquareRoundedNumber6,
} from "@tabler/icons-react";
import { NavLink } from "react-router-dom";

export function Menu() {
  const getEstilo = (props) => {
    let estilo = `
      flex items-center gap-4
      px-3 py-3 w-full
      text-sm text-white 
      hover:bg-zinc-900 `;
    let ativo = "border-r-4 border-solid border-slate-800 ";

    // let final
    // if (props.isActive){
    //     final = estilo + ativo
    // } else {
    //     final = estilo
    // }
    let final = props.isActive ? estilo + ativo : estilo;

    return final;
  };

  return (
    <aside className="flex flex-col gap-5 bg-black min-w-72">
      <header
        className={`
          flex justify-center items-center gap-2
          bg-black text-zinc-50 
          px-1 py-5 h-16          
          text-2xl font-black
        `}
      >
        <IconBrandReact />
        <span className="font-bold">React Rotas</span>
      </header>

      <nav
        className={`
          flex flex-col justify-start items-start gap-2    
          
        `}
      >
        <NavLink to="home" className={getEstilo}>
          <IconHome />
          Home
        </NavLink>
        <NavLink to="contato" className={getEstilo}>
          <IconAddressBook />
          Contato
        </NavLink>
        <NavLink to="sobre" className={getEstilo}>
          <IconInfoCircle />
          Sobre
        </NavLink>


        <NavLink to="Tradutor" className={getEstilo}>
          <IconApple />
          Tradutor
        </NavLink>

        <NavLink to="Tradutor2" className={getEstilo}>
          <IconAbc />
          Tradutor 2
        </NavLink>

        <span className="pt-4 pl-3 text-xs text-zinc-500">Estado</span>

        <NavLink to="semEstado" className={getEstilo}>
          <IconSquareRoundedNumber1 />
          Sem Estado
        </NavLink>

        <NavLink to="comEstado" className={getEstilo}>
          <IconSquareRoundedNumber2 />
          Com Estado
        </NavLink>

        <NavLink to="campoTexto" className={getEstilo}>
          <IconSquareRoundedNumber3 />
          Campo Texto
        </NavLink>

        <span className="pt-4 pl-3 text-xs text-zinc-500">Comunicação</span>

        <NavLink to="comunicaçãoDireta" className={getEstilo}>
          <IconSquareRoundedNumber5 />
          Comunicação Direta
        </NavLink>

        <NavLink to="comunicaçãoIndireta" className={getEstilo}>
          <IconSquareRoundedNumber6 />
          Comunicação Indireta
        </NavLink>


        <span className="pt-4 pl-3 text-xs text-zinc-500">Hooks</span>

        <NavLink to="UseRef" className={getEstilo}>
          <IconSquareRoundedNumber5 />
          UseRef
        </NavLink>

        <NavLink to="UseEffect" className={getEstilo}>
          <IconSquareRoundedNumber5 />
          UseEffect
        </NavLink>


      </nav>

      <footer className="absolute bottom-0 p-2 flex justify-center">
        <span>Desenvolvimento Web 2</span>
      </footer>
    </aside>
  );
}
