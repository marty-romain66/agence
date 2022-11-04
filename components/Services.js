import React from "react";
import { gsap } from "gsap";
import Head from "next/head";

const Services = () => {

  React.useEffect(() => {
    const tl = gsap.timeline();
    tl.fromTo(".services", {
      opacity: 0
    }, {
      opacity: 1,
      ease: "power4.out",
      stagger: 0.33
    });
  }, []);
    
  return (
    <><Head>
      <title>Mes services</title>
      <meta name="description" content="Romain Marty développeur web à Perpignan" />
      <link rel="icon" href="/favicon.ico" />
    </Head><div className="boxServices" id="services">
        <div className="services">
          <h2>Création ou Refonte de votre site internet.</h2>
          <p>
          Pour cela j'utilise des outils classiques comme Wordpress ou des
            technologie récente de pointe comme React Js, tout dépend de vos besoins
            et de votre projet.{" "}
          </p>
        </div>
        <div className="services">
          <h2>Référencement sur moteur de recherche, Seo</h2>
          <p>Pour la pérennité de votre activité, il est important d'être visible sur les moteurs de recherche. Je vous propose de vous accompagner dans cette démarche.</p>
        </div>
        <div className="services">
          <h2>Logiciel web pour vos besoins</h2>
          <p>Vous avez un besoin spécifique, je peux vous aider à le réaliser. Je suis à votre écoute pour vous proposer une solution adaptée à vos besoins.</p>
        </div>
        <div className="services">
          <h2>Intégration sur votre site de restauration de ma solution de réservation en ligne</h2>
          <p>J'ai développé une solution de réservation en ligne pour les restaurants. Je peux l'intégrer sur votre site internet. Allez voir dans l'onglet mes projets pour plus de détails</p>
        </div>


      </div></>
  );
};

export default Services;
