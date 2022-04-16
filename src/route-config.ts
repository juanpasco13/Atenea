import IndiceGeneros from "./Generos/IndiceGeneros";
import LandingPage from "./LandingPage";

const routes = [

   {path: '/', componente:LandingPage, exact:true}, 
   {path: '/Generos', componente:IndiceGeneros, exact:true}, 
];

export default routes;