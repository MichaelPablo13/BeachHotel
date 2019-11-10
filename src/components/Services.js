import React, { Component } from 'react'
import { FaCocktail, FaHiking, FaShuttleVan, FaBeer } from 'react-icons/fa'
import Title from './Title'

export default class Services extends Component {
    state = {
        services: [
            {
                icon: <FaCocktail></FaCocktail>,
                title: "Free cocktails",
                info: "Brazil’s national cocktail is the legendary Caipirinha, which is created with a fiery liquor from sugar cane, called cachaça."
            },
            {
                icon: <FaHiking></FaHiking>,
                title: "Endless Hiking",
                info: "No doubt about it: hikes are fun. Especially in a region like Brazil where there is plenty to discover. All together there are 43 hiking trails that you can choose from."
            },
            {
                icon: <FaShuttleVan></FaShuttleVan>,
                title: "Free Shuttle",
                info: "just steps from the beach near cinemas, shopping malls and theater surrounded by an exciting Copacabana atmosphere, just 10 minutes from the City Center and Santos Dumont Airport and 20 from the International Airport. The Hotel offers complimentary transfers from Santos Dumont and Galeão International Airports to its guests. The service daily from 08h to 19h. Airport / Hotel"
            },
            {
                icon: <FaBeer></FaBeer>,
                title: "Strongest Beer",
                info: "These are the beers that you will probably find in almost every typical Brazilian bar and are the most common beers across the country. Many of these brands are owned by the beverage company giant, AmBev. Keep your eyes out for any of the following macro-beers in the local, low-key bars in Brazil."
            }
        ]
    };

    render() {
        return (
            <section className="services">
                <Title title="services"></Title>
                    <div className="services-center">
                        {this.state.services.map((item, index) => {
                            return (
                                <article key={index} className="service">
                                    <span>{item.icon}</span>
                                    <h6>{item.title}</h6>
                                    <p>{item.info}</p>
                                </article>
                            );
                        })}
                    </div>
            </section>
        );
    }
}
