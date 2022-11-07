import React, { useEffect } from "react";
import Footer from "../components/Footer";
import animBoxServices from "../animGsap/animServices";

export default function services() {
useEffect(() => {
animBoxServices();
}, []);


  return (
    <div className="boxServices">
      <div className="boxServices__1">
        <h3>PRESTATIONS DE SERVICES</h3>
        <h2>Développeur web front-end React</h2>
        <p>
          Une mission, programmer des projets web en proposant des solutions
          techniques et automatisées
        </p>
      </div>
      <div className="boxServices__2">
        <h4>FAISONS UN PEU LE TOUR DE MES SERVICES</h4>
        <h3>Que pourrions-nous réaliser ensemble ?</h3>
        <p>
          Fort d'une expérience en programmation informatique orienté web de
          plus de 15 ans, mon domaine de compétence s'étend de la réalisation de
          l'identité à l'optimisation de performance (référencement /
          positionnement / vitesse d'affichage).
        </p>
      </div>
      <div className="boxServices__Card">
        <div className="card">
          <div className="boxCrossSvg">
            {" "}
            <svg
              aria-hidden="true"
              focusable="false"
              data-prefix="fas"
              data-icon="paint-brush"
              class="svg-inline--fa fa-paint-brush fa-w-16 "
              role="img"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 512 512"
            >
              <path
                fill="currentColor"
                d="M167.02 309.34c-40.12 2.58-76.53 17.86-97.19 72.3-2.35 6.21-8 9.98-14.59 9.98-11.11 0-45.46-27.67-55.25-34.35C0 439.62 37.93 512 128 512c75.86 0 128-43.77 128-120.19 0-3.11-.65-6.08-.97-9.13l-88.01-73.34zM457.89 0c-15.16 0-29.37 6.71-40.21 16.45C213.27 199.05 192 203.34 192 257.09c0 13.7 3.25 26.76 8.73 38.7l63.82 53.18c7.21 1.8 14.64 3.03 22.39 3.03 62.11 0 98.11-45.47 211.16-256.46 7.38-14.35 13.9-29.85 13.9-45.99C512 20.64 486 0 457.89 0z"
              ></path>
            </svg>
          </div>
          <h5>Identité graphique</h5>
          <p>
            Réalisation intégrale d'une maquette et d'une charte graphique prête
            à être exploitée ou d'éléments ponctuels au sein d'un projet web.
          </p>
        </div>
        <div className="card">
          <div className="boxCrossSvg">
            <svg
              aria-hidden="true"
              focusable="false"
              data-prefix="fas"
              data-icon="laptop-code"
              class="svg-inline--fa fa-laptop-code fa-w-20 "
              role="img"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 640 512"
            >
              <path
                fill="currentColor"
                d="M255.03 261.65c6.25 6.25 16.38 6.25 22.63 0l11.31-11.31c6.25-6.25 6.25-16.38 0-22.63L253.25 192l35.71-35.72c6.25-6.25 6.25-16.38 0-22.63l-11.31-11.31c-6.25-6.25-16.38-6.25-22.63 0l-58.34 58.34c-6.25 6.25-6.25 16.38 0 22.63l58.35 58.34zm96.01-11.3l11.31 11.31c6.25 6.25 16.38 6.25 22.63 0l58.34-58.34c6.25-6.25 6.25-16.38 0-22.63l-58.34-58.34c-6.25-6.25-16.38-6.25-22.63 0l-11.31 11.31c-6.25 6.25-6.25 16.38 0 22.63L386.75 192l-35.71 35.72c-6.25 6.25-6.25 16.38 0 22.63zM624 416H381.54c-.74 19.81-14.71 32-32.74 32H288c-18.69 0-33.02-17.47-32.77-32H16c-8.8 0-16 7.2-16 16v16c0 35.2 28.8 64 64 64h512c35.2 0 64-28.8 64-64v-16c0-8.8-7.2-16-16-16zM576 48c0-26.4-21.6-48-48-48H112C85.6 0 64 21.6 64 48v336h512V48zm-64 272H128V64h384v256z"
              ></path>
            </svg>
          </div>
          <h5>Intégration web</h5>
          <p>
            Développement et intégration d'une maquette graphique pour la
            convertir en un projet web conforme, je porte une attention
            particulière à l'expérience utilisateur et à l'optimisation (SEO &
            Rapidité d'affichage) sur l'ensemble de mes projets.
          </p>
        </div>
        <div className="card">
          <div className="boxCrossSvg">
            <svg
              aria-hidden="true"
              focusable="false"
              data-prefix="fas"
              data-icon="code"
              class="svg-inline--fa fa-code fa-w-20 "
              role="img"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 640 512"
            >
              <path
                fill="currentColor"
                d="M278.9 511.5l-61-17.7c-6.4-1.8-10-8.5-8.2-14.9L346.2 8.7c1.8-6.4 8.5-10 14.9-8.2l61 17.7c6.4 1.8 10 8.5 8.2 14.9L293.8 503.3c-1.9 6.4-8.5 10.1-14.9 8.2zm-114-112.2l43.5-46.4c4.6-4.9 4.3-12.7-.8-17.2L117 256l90.6-79.7c5.1-4.5 5.5-12.3.8-17.2l-43.5-46.4c-4.5-4.8-12.1-5.1-17-.5L3.8 247.2c-5.1 4.7-5.1 12.8 0 17.5l144.1 135.1c4.9 4.6 12.5 4.4 17-.5zm327.2.6l144.1-135.1c5.1-4.7 5.1-12.8 0-17.5L492.1 112.1c-4.8-4.5-12.4-4.3-17 .5L431.6 159c-4.6 4.9-4.3 12.7.8 17.2L523 256l-90.6 79.7c-5.1 4.5-5.5 12.3-.8 17.2l43.5 46.4c4.5 4.9 12.1 5.1 17 .6z"
              ></path>
            </svg>
          </div>
          <h5>Développement</h5>
          <p>
            Programmation ponctuelle et spécifique pour améliorer, poursuivre ou
            convertir un projet déjà existant dans le cadre d'une mission
            définie, seule où au sein d'une équipe, je m'intègre facilement.
          </p>
        </div>
        <div className="card">
          <div className="boxCrossSvg">
            <svg
              aria-hidden="true"
              focusable="false"
              data-prefix="fas"
              data-icon="mug-hot"
              class="svg-inline--fa fa-mug-hot fa-w-16 "
              role="img"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 512 512"
            >
              <path
                fill="currentColor"
                d="M127.1 146.5c1.3 7.7 8 13.5 16 13.5h16.5c9.8 0 17.6-8.5 16.3-18-3.8-28.2-16.4-54.2-36.6-74.7-14.4-14.7-23.6-33.3-26.4-53.5C111.8 5.9 105 0 96.8 0H80.4C70.6 0 63 8.5 64.1 18c3.9 31.9 18 61.3 40.6 84.4 12 12.2 19.7 27.5 22.4 44.1zm112 0c1.3 7.7 8 13.5 16 13.5h16.5c9.8 0 17.6-8.5 16.3-18-3.8-28.2-16.4-54.2-36.6-74.7-14.4-14.7-23.6-33.3-26.4-53.5C223.8 5.9 217 0 208.8 0h-16.4c-9.8 0-17.5 8.5-16.3 18 3.9 31.9 18 61.3 40.6 84.4 12 12.2 19.7 27.5 22.4 44.1zM400 192H32c-17.7 0-32 14.3-32 32v192c0 53 43 96 96 96h192c53 0 96-43 96-96h16c61.8 0 112-50.2 112-112s-50.2-112-112-112zm0 160h-16v-96h16c26.5 0 48 21.5 48 48s-21.5 48-48 48z"
              ></path>
            </svg>
          </div>
          <h5>Conseils/Expertises</h5>
          <p>
            Je vous accompagne dans la définition de votre projet, de sa
            stratégie et de son développement, je vous aide à trouver les
            solutions les plus adaptées à vos besoins et à vos objectifs.
          </p>
        </div>
      </div>
      
    </div>
  );
}
