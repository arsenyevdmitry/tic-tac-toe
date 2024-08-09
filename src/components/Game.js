import React, { useState } from "react"
import Field from "./Field"
import Information from "./Information"
import styles from "./Game.module.css"

const WIN_PATTERNS = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8], // Горизонтальные линии
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8], // Вертикальные линии
  [0, 4, 8],
  [2, 4, 6], // Диагональные линии
]

const Game = () => {
  const [field, setField] = useState(Array(9).fill(""))
  const [currentPlayer, setCurrentPlayer] = useState("X")
  const [isGameEnded, setIsGameEnded] = useState(false)
  const [isDraw, setIsDraw] = useState(false)

  const handleClick = (index) => {
    if (field[index] || isGameEnded) return

    const newField = field.slice()
    newField[index] = currentPlayer
    setField(newField)

    if (checkWin(newField)) {
      setIsGameEnded(true)
    } else if (newField.every((cell) => cell)) {
      setIsDraw(true)
    } else {
      setCurrentPlayer(currentPlayer === "X" ? "0" : "X")
    }
  }

  const checkWin = (field) => {
    return WIN_PATTERNS.some((pattern) =>
      pattern.every((index) => field[index] === currentPlayer)
    )
  }

  const handleRestart = () => {
    setField(Array(9).fill(""))
    setCurrentPlayer("X")
    setIsGameEnded(false)
    setIsDraw(false)
  }

  return (
    <div className={styles.game}>
      <Information
        currentPlayer={currentPlayer}
        isGameEnded={isGameEnded}
        isDraw={isDraw}
      />
      <Field field={field} onClick={handleClick} />
      <button className={styles.restartButton} onClick={handleRestart}>
        Начать заново
      </button>
    </div>
  )
}

export default Game
