import React from 'react';
import styles from './Zaklad_kto_lepiej_obstawia.scss';
import Button from '@material-ui/core/Button';

class Zaklad_kto_lepiej_obstawia extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      result: ' ',
    };
  }

  render() {
    function firstDice(num) {
      console.log('first User First Dice num:', num);
      return num;
    }
    function secondDice(num) {
      console.log('first User Second Dice num:', num);
      return num;
    }
    function thirdDice(num) {
      console.log('first User Third Dice num:', num);
      return num;
    }

    function howManyDiceThrows(num) {
      console.log('how Many Dice Throws num:', num);
      return num;
    }

    function firstUserBetsOnTheResult(num) {
      console.log('first user bets on the result num:', num);
      return num;
    }

    function secondUserBetsOnTheResult(num) {
      console.log('second user bets on the result num:', num);
      return num;
    }

    const add = (a, b) => a + b;

    function rzutKostkami(firstDice, secondDice, thirdDice, howManyDiceThrows) {
      let losowyWynikRzutuKostki1;
      let losowyWynikRzutuKostki2;
      let losowyWynikRzutuKostki3;
      let wynikWszystkichRzutow = [];
      let sumaOczek = [0];
      let sumaWszystkichOczekZeWszystkichRzutow;
      let srednia;

      for (let i = 1; i <= howManyDiceThrows; i++) {
        losowyWynikRzutuKostki1 =
          Math.floor(Math.random() * Math.floor(firstDice)) + 1;
        losowyWynikRzutuKostki2 =
          Math.floor(Math.random() * Math.floor(secondDice)) + 1;
        losowyWynikRzutuKostki3 =
          Math.floor(Math.random() * Math.floor(thirdDice)) + 1;
        wynikWszystkichRzutow.push(
          losowyWynikRzutuKostki1 +
            ' ' +
            losowyWynikRzutuKostki2 +
            ' ' +
            losowyWynikRzutuKostki3
        );
        sumaOczek.push(
          losowyWynikRzutuKostki1 +
            losowyWynikRzutuKostki2 +
            losowyWynikRzutuKostki3
        );
        console.log(
          losowyWynikRzutuKostki1 +
            ';' +
            losowyWynikRzutuKostki2 +
            ';' +
            losowyWynikRzutuKostki3 +
            ';' +
            sumaOczek
        );
      }
      sumaWszystkichOczekZeWszystkichRzutow = sumaOczek.reduce(add);
      srednia = sumaWszystkichOczekZeWszystkichRzutow / howManyDiceThrows;
      return srednia;
    }

    function whoWinsTheBet(
      firstUserName,
      secondUserName,
      firstUserBetsOnTheResult,
      secondUserBetsOnTheResult,
      firstDice,
      secondDice,
      thirdDice,
      howManyDiceThrows,
      betUser1,
      betUser2
    ) {
      let resultOfThrow = rzutKostkami(
        firstDice,
        secondDice,
        thirdDice,
        howManyDiceThrows
      );
      resultOfThrow = Math.round((resultOfThrow + Number.EPSILON) * 100) / 100; //zaokrąglam do 2 miejsc po przecinku.

      if (!firstUserBetsOnTheResult || !secondUserBetsOnTheResult) {
        return 'fill all the fields first :)';
      } else if (
        Math.abs(firstUserBetsOnTheResult - resultOfThrow) <
        Math.abs(secondUserBetsOnTheResult - resultOfThrow)
      ) {
        return (
          'Result is ' +
          resultOfThrow +
          ' so ' +
          firstUserName +
          ' wins and now... ' +
          betUser1
        );
      } else if (
        Math.abs(firstUserBetsOnTheResult - resultOfThrow) >
        Math.abs(secondUserBetsOnTheResult - resultOfThrow)
      ) {
        return (
          'Result is ' +
          resultOfThrow +
          ' so ' +
          secondUserName +
          ' wins and now... ' +
          betUser2
        );
      } else if (firstUserBetsOnTheResult === secondUserBetsOnTheResult) {
        return 'Draw! Everybody wins ;)';
      }
    }

    return (
      <div className={styles.main}>
        <div className={styles.question}>
          <div className={styles.line}></div>
          <div className={styles.title}>And now a small game for two:</div>
          <div className={styles.titleGame}>Who is better bettor? :)</div>
          <div className={styles.gameExplanation}>
            This game is about guessing the average amount of dots on 3 dices
            after throwing them as many times as the players want.<br></br>
            Players put their names and the subjects to bet on. They also put
            the numbers of walls (so also the dots) that dices have and how many
            times they will be thrown. After that the players bet on the result
            - the smallest number they can bet is of course 3 (3 dices, and on
            each result-wall with 1 dot). Maximum number to bet is the sum of
            all the walls (=dots) of these 3 dices. The winner is the one whose
            guess is closer to the result of throwing the dices.
          </div>
          <div className={styles.users}>
            <div className={styles.userName1}>User 1 - what is your name?</div>
            <input
              placeholder='User 1 - write your name'
              className={styles.inputName}
              onChange={(event) =>
                this.setState({
                  firstUserName: event.target.value,
                })
              }
            ></input>
            <div className={styles.userName2}>User 2 - what is your name?</div>
            <input
              placeholder='User 2 - write your name'
              className={styles.inputName}
              onChange={(event) =>
                this.setState({
                  secondUserName: event.target.value,
                })
              }
            ></input>
            <div className={styles.userName2}>
              {this.state.firstUserName} - what do you bet about?
            </div>
            <input
              placeholder='User 1 - what do you bet about?'
              className={styles.inputName}
              onChange={(event) =>
                this.setState({
                  betUser1: event.target.value,
                })
              }
            ></input>
            <div className={styles.userName2}>
              {this.state.secondUserName} - what do you bet about?
            </div>
            <input
              placeholder='User 2 - what do you bet about?'
              className={styles.inputName}
              onChange={(event) =>
                this.setState({
                  betUser2: event.target.value,
                })
              }
            ></input>
            <div className={styles.user1}>How many walls do dices have?</div>
            <input
              placeholder='User 1 - write a number of walls of the first dice'
              className={styles.input}
              onChange={(event) =>
                this.setState({
                  firstDice: firstDice(event.target.value),
                })
              }
            ></input>
            <input
              placeholder='User 1 - write a number of walls of the second dice'
              className={styles.input}
              onChange={(event) =>
                this.setState({
                  secondDice: secondDice(event.target.value),
                })
              }
            ></input>
            <input
              placeholder='User 1 - write a number of walls of the third dice'
              className={styles.input}
              onChange={(event) =>
                this.setState({
                  thirdDice: thirdDice(event.target.value),
                })
              }
            ></input>
          </div>
          <div className={styles.user}>
            {this.state.firstUserName} and {this.state.secondUserName} - write a
            number of dices throws
          </div>
          <input
            placeholder='both users - write a number of dices throws'
            className={styles.input}
            onChange={(event) =>
              this.setState({
                howManyDiceThrows: howManyDiceThrows(event.target.value),
              })
            }
          ></input>
          <div className={styles.user}>
            {this.state.firstUserName} bets on the result:
          </div>
          <input
            placeholder='User 1 - what result do you bet?'
            className={styles.input}
            onChange={(event) =>
              this.setState({
                firstUserBetsOnTheResult: firstUserBetsOnTheResult(
                  event.target.value
                ),
              })
            }
          ></input>
          <div className={styles.user}>
            {this.state.secondUserName} bets on the result:
          </div>
          <input
            placeholder='User 2 - what result do you bet?'
            className={styles.input}
            onChange={(event) =>
              this.setState({
                secondUserBetsOnTheResult: secondUserBetsOnTheResult(
                  event.target.value
                ),
              })
            }
          ></input>
          <div className={styles.result}>
            <Button
              className={styles.buttonToClick}
              variant='outlined'
              color='primary'
              onClick={() =>
                this.setState({
                  result: whoWinsTheBet(
                    this.state.firstUserName,
                    this.state.secondUserName,
                    this.state.firstUserBetsOnTheResult,
                    this.state.secondUserBetsOnTheResult,
                    this.state.firstDice,
                    this.state.secondDice,
                    this.state.thirdDice,
                    this.state.howManyDiceThrows,
                    this.state.betUser1,
                    this.state.betUser2
                  ),
                })       
              }
            >
              Throw the dices
            </Button>
            <div className={styles.resultText}>{this.state.result}</div>
          </div>
          
        </div>
        <div className={styles.line}></div>
      </div>
    );
  }
}

export default Zaklad_kto_lepiej_obstawia;
