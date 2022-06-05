import React, { PureComponent } from 'react';
import { Link } from 'react-router-dom';

import Header from '../component/Header';
import gatxin from '../images/gatxin.gif';
import '../styles/Ranking.scss';

export default class Ranking extends PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      history: [],
    };
  }

  componentDidMount() {
    const newRank = JSON.parse(localStorage.getItem('ranking'))
      .sort((a, b) => b.score - a.score);
    this.setState({ history: newRank });
  }

  render() {
    const { state: { history } } = this;
    return (
      <main className="ranking-main-container">
        <Header />
        <div className="ranking-content">
          <section className="ranking-content">
            {
              history.map(({ name, score, picture }, i) => (
                <div key={ i } className="history-card">
                  <p data-testid={ `player-name-${i}` }>{name}</p>
                  <p data-testid={ `player-score-${i}` }>
                    Pontuação:
                    {' '}
                    { score }
                  </p>
                  <img src={ picture } alt={ name } />
                </div>
              ))
            }
          </section>
        </div>
        <div className="box-buttons">
          {/* <button className="clear-button" type='button'>Clear Ranking</button> */}
          <img className='gif' src={ gatxin } alt="" />
          <Link to="/">
            <button className='play-again' type="button" data-testid="btn-go-home">Play Again</button>
          </Link>
        </div>
      </main>
    );
  }
}
