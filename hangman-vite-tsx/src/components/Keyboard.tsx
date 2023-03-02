import { letters } from "../assets/letters";
import styles from '../assets/keybord.module.css';

type KeyboardProps = {
  activeLetters: string[],
  inactiveLetters: string[],
  addGuessedletter: (letter: string) => void,
  disabled?: boolean
}

const Keyboard = ({ activeLetters, inactiveLetters, addGuessedletter, disabled = false }: KeyboardProps) => {
  return (
    <div style={{
      display: 'grid',
      gridTemplateColumns: 'repeat(auto-fit, minmax(75px, 1fr))',
      gap: '.5rem'
    }}>
      {letters.map((key) => {
          const isActive = activeLetters.includes(key)
          const inActive = inactiveLetters.includes(key)
        return (
          <button
            onClick={() => addGuessedletter(key)}
            className={`${styles.btn} ${isActive ? styles.active : ''} ${inActive ? styles.inactive : ''}`}
            disabled={inActive || isActive || disabled}
            key={key}
          >{key}</button>
        )
      })}
    </div>
  )
}

export default Keyboard