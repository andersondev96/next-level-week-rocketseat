import { useContext } from 'react';
import { ChallangesContext } from '../context/ChallangesContext';
import { CountdownContext } from '../context/CountdownContext';

import styles from '../styles/components/ChallangeBox.module.css';

export function ChallangeBox() {
  const { activeChallange, resetChallange, completeChallange } = useContext(ChallangesContext);
  const { resetCountDown } = useContext(CountdownContext);

  function handleChallangeSucceded() {
    completeChallange();
    resetCountDown();
  }

  function handleChallangeFailed() {
    resetChallange();
    resetCountDown();
  }


  return (
    <div className={styles.challangeBoxContainer}>
      { activeChallange ? (
        <div className={styles.challangeActive}>
          <header>Ganhe {activeChallange.amount} xp</header>

          <main>
            <img src={`icons/${activeChallange.type}.svg`} />
            <strong>Novo desafio</strong>
            <p>{activeChallange.description}</p>
          </main>

          <footer>
            <button 
              type="button"
              className={styles.challangeFailedButton}
              onClick={handleChallangeFailed}
            >
              Falhei
            </button>
            <button 
              type="button"
              className={styles.challangeSucceededButton}
              onClick={handleChallangeSucceded}
            >
              Completei
            </button>
          </footer>
        </div>
      ) : (
        <div className={styles.challangeNotActive}>
          <strong>Finalize um ciclo para receber um desafio</strong>
          <p>
            <img src="icons/level-up.svg" alt="Level Up"/>
            Avance de level completando desafios.
          </p>
      </div>
      ) }
    </div>
  );
}