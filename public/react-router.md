Hay que instalar la libreria de React-Router poniendo:
# npm install react-router-dom

Sale este error (que no es un error)
1 high severity vulnerability

To address all issues, run:
npm audit fix

Esto se arregla poniendo: `npm audit fix --force`  --> con esto le decimos que arregle este problema que será que una libreria se ha quedado antigua y la actualiza. El '--force' es para que sobreescriba archivos.

npm install react-router-native es para móviles (esta no)

Ponemos:
<BrowserRouter>
</BrowserRouter>

Para conectarnos a la API del historial del navegador.

`Creamos una carpeta` llamada `router` dentro de la `carpeta src`

Dentro `creamos un componente Router.jsx`

Colocamos `nuestro componente dentro del BrowserRouter`.
Tenemos  que `seleccionar` el que pone la `ruta src/Router`

Cuando tenemos `varias paginas` web, creamos una `carpeta` llamada `pages` `en src`

`Una pagina se crea igual que un componente`