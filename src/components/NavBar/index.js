// Write your code here.
import './index.css'

const NavBar = props => {
  const {currentScore, isGameInProgress, topScore} = props
  const name = 'Emoji Game'
  return (
    <nav className="nav-bar-container">
      <div className="title-with-score-container">
        <div className="logo-title-container">
          <img
            src="https://assets.ccbp.in/frontend/react-js/game-logo-img.png"
            alt="emoji logo"
          />
          <h1 className="title">{name}</h1>
        </div>
        {isGameInProgress && (
          <div className="scores-container">
            <p className="scores">Score: {currentScore} </p>
            <p className="scores">Top Score: {topScore} </p>
          </div>
        )}
      </div>
    </nav>
  )
}

export default NavBar
