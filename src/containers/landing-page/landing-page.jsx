import React, { Component } from 'react';
import './landing-page.scss'

class LandingPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      
    }
    this.getQuote = this.getQuote.bind(this);
    this.setNextComponent = this.setNextComponent.bind(this);

    this.quotes = [
      'True meditation is about being fully present with everything that is–including discomfort and challenges. It is not an escape from life.',
      'Anyone who practices can obtain success in yoga but not one who is lazy. Constant practice alone is the secret of success.',
      'The body is your temple. Keep it pure and clean for the soul to reside in.',
      'Yoga is not just repetition of few postures – it is more about the exploration and discovery of the subtle energies of life.'
    ];

    setInterval(() => {
      let number = this.getQuote();
      const element = document.getElementById("quote");
      element.innerHTML = this.quotes[number];
    }, 2000);
  }

  componentDidMount() {
    window.addEventListener('scroll', this.setNextComponent);
  }

  setNextComponent() {
    if (window.location.href.indexOf("services")) {
    }
  }

  componentWillUnmount() {
    window.removeEventListener('scroll', this.setNextComponent);
  }

  getQuote() {
    let randomNumber = Math.floor(Math.random() * this.quotes.length);
    return randomNumber;
  };

  render() {
    return (
      <div>
      <video autoPlay loop >
        <source src={require('../../static/Yoga.mp4')} type="video/mp4" />
      </video>
        <hr></hr>
        <div className="quotes">
          <p id="quote"></p>
        </div>
      </div>
    )
  }
}
export default LandingPage;