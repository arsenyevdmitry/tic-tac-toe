import PropTypes from "prop-types"
import React from "react"
import styles from "./Information.module.css"

const Information = ({ currentPlayer, isGameEnded, isDraw }) => {
  let status
  if (isDraw) {
    status = "Ничья"
  } else if (isGameEnded) {
    status = `Победа: ${currentPlayer}`
  } else {
    status = `Ходит: ${currentPlayer}`
  }

  return <div className={styles.information}>{status}</div>
}

Information.propTypes = {
  currentPlayer: PropTypes.string.isRequired,
  isGameEnded: PropTypes.bool.isRequired,
  isDraw: PropTypes.bool.isRequired,
}

export default Information
