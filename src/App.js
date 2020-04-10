import React, { Component } from 'react';
import Fade from 'react-reveal/Fade';
import Zoom from 'react-reveal/Zoom';
import format from 'date-fns/format';
import ShakespeareImg from './images/shakespeare.png';
import ScrollImg from './images/ancient-scroll.svg';
import shakespeareAPI from './utils/shakespeareAPI';
import IconAttribution from './components/IconAttribution';
import {
  QuoteText,
  ButtonWrapper,
  ScrollImage,
  Body,
  Title,
  Wrapper,
  QuoteWrapper,
  Shakespeare
} from './components/Styles';

const Quote = ({ quote }) => {
  const formattedDate = format(quote.publish_date, 'MMMM YYYY');
  return (
    <QuoteText>
      <h1>{quote.body}</h1>
      <span>
        Submitted by {quote.author}, {formattedDate}
      </span>
    </QuoteText>
  );
};

const NextQuote = ({ text, newQuote }) => {
  return (
    <ButtonWrapper onClick={newQuote}>
      <ScrollImage>
        <img src={ScrollImg} alt='Next quote' />
      </ScrollImage>
      <span>{text}</span>
    </ButtonWrapper>
  );
};

class App extends Component {
  constructor() {
    super();
    this.state = {
      quotes: [],
      quotesLoaded: false,
      showQuote: true,
      random: null
    };
    this.fetchQuotes = this.fetchQuotes.bind(this);
  }

  componentWillMount() {
    this.fetchQuotes();
  }

  async fetchQuotes() {
    try {
      const response = await shakespeareAPI();

      this.setState({ quotes: response }, function() {
        this.getRandomQuote();
        this.setState({ quotesLoaded: true });
      });
    } catch (error) {
      console.error(error);
    }
  }

  getRandomQuote = () => {
    const random = Math.floor(Math.random() * this.state.quotes.length);
    this.setState({ random });
  };

  loadNewQuote = id => {
    this.setState({ showQuote: false }, function() {
      setTimeout(() => {
        this.getRandomQuote();
        this.setState({ showQuote: true });
      }, 1000);
    });
  };

  render() {
    const { quotes, quotesLoaded, showQuote, random } = this.state;

    return (
      <Body>
        {quotesLoaded && random !== null && (
          <Fade top>
            <Title>Shakespeare Doth Mic Drop</Title>
            <Wrapper>
              <Shakespeare>
                <img src={ShakespeareImg} alt='Shakespeare himself' />
              </Shakespeare>

              <QuoteWrapper>
                <Zoom right when={showQuote}>
                  <Quote quote={quotes[random]} />
                </Zoom>

                <NextQuote
                  text='Next'
                  newQuote={() => this.loadNewQuote(random)}
                />
              </QuoteWrapper>
            </Wrapper>
          </Fade>
        )}
        {quotesLoaded && <IconAttribution />}
      </Body>
    );
  }
}

export default App;
