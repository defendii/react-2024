import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import {
  Route,
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";
import "./index.css";

import { Home } from "./pages/Home";
import { Contato } from "./pages/Contato";
import { Sobre } from "./pages/Sobre";
import { Pagina404 } from "./pages/Pagina404";
import { Layout } from "./pages/_Layout";
import { SemEstado } from "./pages/estado/SemEstado";
import { ComEstado } from "./pages/estado/ComEstado";
import { CampoTexto } from "./pages/estado/CampoTexto";
import { ComunicaçãoIndireta } from "./pages/Comunicação/ComunicaçãoIndireta";
import { ComunicaçãoDireta } from "./pages/Comunicação/ComunicaçãoDireta";
import { UseRef} from "./pages/hooks-basicos/UseRef";
import { UseEffect } from "./pages/hooks-basicos/UseEffect";
import { Tradutor } from "./pages/Tradutor";
import { Tradutor2 } from "./pages/Tradutor2";

// const rotas = createBrowserRouter([
//   {path:"/", element: <Home/>},
//   {path:"/home", element: <Home/>},
//   {path:"/contato", element: <Contato/>},
//   {path:"/sobre", element: <Sobre/>},
//   {path:"*", element: <Pagina404/>},
// ])

const rotas = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Layout />}>
      <Route index element={<Home />} />
      <Route path="home" element={<Home />} />
      <Route path="contato" element={<Contato />} />
      <Route path="sobre" element={<Sobre />} />
      <Route path="semEstado" element={<SemEstado/>} />
      <Route path="comEstado" element={<ComEstado/>} />
      <Route path="campoTexto" element={<CampoTexto/>} />
      <Route path="comunicaçãoIndireta" element={<ComunicaçãoIndireta/>} />
      <Route path="comunicaçãoDireta" element={<ComunicaçãoDireta/>} />
      <Route path="UseRef" element={<UseRef/>} />
      <Route path="UseEffect" element={<UseEffect/>} />
      <Route path="Tradutor" element={<Tradutor/>} />
      <Route path="Tradutor2" element={<Tradutor2/>} />
      <Route path="*" element={<Pagina404 />} />
    </Route>
  )
);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={rotas} />
  </StrictMode>
);
