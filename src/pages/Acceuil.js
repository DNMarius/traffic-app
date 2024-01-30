import React from "react";

import Job from '../components/Job';
import Main from '../components/Main';
import Header from "../components/Header";
import Footer from "../components/Footer";
import Section from '../components/Section';
import Article from '../components/Article';
import Presentation from '../components/Presentation'
import Functionnality from "../components/Functionnality";
import ArticlesContainer from '../components/ArticlesContainer';
import Card from "../components/Card";
import Caroussel from "../components/Caroussel";

export default function Acceuil() {
    return (
        <div className="h-[100vh] document-container">
            <Header />
            <Main />
            <Section title="Popular Job Categories" subtitle="2023 jobs live -293 added today">
                <Functionnality />
            </Section>
            <Section className="pt-24">
                <Presentation />
            </Section>
            <Section title="Témoignages de nos clients" subtitle="Ils essaient une fois et ils adoptent. Essayez-le et trouvez votre compte." className="pt-24" style={{ backgroundColor:"#F0F5F8"}}>
                <Caroussel>
                    <Card title="J'aime" name="KAMGANG" subtitle="developper">
                        L'application de reverse proxy que nous avons utilisée était incroyable ! Elle a grandement amélioré nos performances en équilibrant la charge entre nos serveurs backend et en mettant en cache les réponses fréquemment demandées. Notre site Web est plus rapide que jamais
                    </Card>
                    <Card title="J'aime" name="LASHU" subtitle="Ingénieur logiciel">
                        Grâce à cette application de reverse proxy, nous avons pu facilement exposer notre serveur local sur Internet sans avoir à modifier notre configuration réseau. Cela nous a permis de partager notre application avec des clients et des partenaires, ce qui a considérablement simplifié notre processus de collaboration
                    </Card>
                    <Card title="J'aime" name="KENMOGNE" subtitle="developper">
                        L'un des meilleurs aspects de cette application de reverse proxy est sa sécurité intégrée. Elle a protégé nos serveurs backend contre les attaques potentielles et a fourni une couche de filtrage et d'authentification pour garantir l'accès autorisé uniquement. Nous nous sentons en sécurité en utilisant cette solution
                    </Card>
                    <Card title="J'aime" name="TCHIENDJO" subtitle="Développeur full-stack">
                        Nous avons été impressionnés par les fonctionnalités de débogage et d'inspection des requêtes offertes par cette application de reverse proxy. Elle nous a permis de visualiser le trafic réseau en temps réel, de comprendre les problèmes potentiels et de diagnostiquer rapidement les problèmes de notre application. Cela a accéléré notre processus de développement et de résolution de problèmes
                    </Card>
                    <Card title="J'aime" name="TAZO" subtitle="DevOps">
                        Cette application de reverse proxy a été extrêmement facile à configurer et à utiliser. Les fonctionnalités étaient bien documentées et l'interface utilisateur était conviviale. Nous n'avons rencontré aucun problème majeur lors de son déploiement et elle a parfaitement fonctionné dès le début. Cela a été un gain de temps précieux pour notre équipe
                    </Card>
                    <Card title="J'aime" name="TCHAFA" subtitle="Consultant">
                        Nous avons été impressionnés par la capacité de cette application de reverse proxy à fournir des analyses détaillées sur le trafic entrant. Grâce à ses fonctionnalités avancées de journalisation et de suivi, nous avons pu obtenir des informations précieuses sur les performances de notre application et identifier les goulots d'étranglement. Cela nous a permis d'optimiser notre infrastructure et d'offrir une meilleure expérience utilisateur
                    </Card>
                    <Card title="J'aime" name="KWABOU" subtitle="Développeur full-stack">
                        Cette application de reverse proxy a considérablement simplifié notre processus de déploiement. Nous avons pu facilement rediriger le trafic vers différents environnements (développement, test, production) en utilisant des règles de routage flexibles. Cela nous a permis de gérer efficacement nos différentes instances d'application sans perturber nos utilisateurs finaux
                    </Card>
                    <Card title="J'aime" name="IHONG" subtitle="Architecte logiciel ">
                        L'un des aspects les plus appréciés de cette application de reverse proxy est sa flexibilité. Elle nous a permis de personnaliser les règles de routage en fonction de nos besoins spécifiques, y compris la redirection basée sur des en-têtes HTTP ou des paramètres de requête. Cette fonctionnalité nous a donné un contrôle granulaire sur la façon dont le trafic était géré, ce qui a été essentiel pour notre application complexe
                    </Card>
                    <Card title="J'aime" name="LISSOM" subtitle="Architecte logiciel ">
                        L'un des aspects les plus appréciés de cette application de reverse proxy est sa flexibilité. Elle nous a permis de personnaliser les règles de routage en fonction de nos besoins spécifiques, y compris la redirection basée sur des en-têtes HTTP ou des paramètres de requête. Cette fonctionnalité nous a donné un contrôle granulaire sur la façon dont le trafic était géré, ce qui a été essentiel pour notre application complexe
                    </Card>
                </Caroussel>
            </Section>
            <Footer />
        </div>
    );
}
