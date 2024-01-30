import React, { Component } from 'react';
import ReactDOM from 'react-dom';

export default class Caroussel extends Component {
    cardsContainer;
    largeurEnfantAvecMarges;
    defilement;
    constructor(props) {
        super(props);
        this.defilement = 0;
    }
    componentDidMount() {
        this.cardsContainer = ReactDOM.findDOMNode(this).firstElementChild;
        let firstCard = this.cardsContainer.children[0];
        let styles = getComputedStyle(firstCard);
        let marginLeft = parseInt(styles.marginLeft);
        let marginRight = parseInt(styles.marginRight);
        this.largeurEnfantAvecMarges = firstCard.offsetWidth + marginLeft + marginRight;
    }
    
    defiler = (event) => {
        let elementCible;
        if (event.target.tagName != "LI") {
            elementCible = event.target.parentNode;
        } else {
            elementCible = event.target;
        }
        this.defilement = this.largeurEnfantAvecMarges*elementCible.id;
        this.cardsContainer.scrollTo({
            left: this.defilement, // nombre de pixels de défilement
            behavior: "smooth",
        });
    }

    render() {
        return (
            <div>
                <div className="flex overflow-hidden w-screen">
                    {this.props.children}
                </div>
                <div className="flex justify-center gap-2 items-center w-full mt-4">
                    <ul className="flex">
                        {React.Children.map(this.props.children, (child, idx) => (
                            <li onClick={this.defiler} className="w-4 h-4 box-border flex items-center justify-center mx-1" id={idx}>
                                <div className="w-[6px] h-[6px] bg-[#bbbbbb] rounded-full hover:bg-black"></div>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        );
    }
}