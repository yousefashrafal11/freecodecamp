import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import LogoTile from '../../assets/images/logo-s.png'
import AnimatedLetters from '../AnimatedLetters'
import './index.scss'

const Home = () => {
  // here I make useState
  const [letterClass, setLetterClass] = useState('text-animate')
  // Here make array components
  const nameArray = ['Y', 'o', 'u', 's', 's', 'e', 'f']
  const jobArray = [
    'W',
    'e',
    'b',
    ' ',
    'D',
    'e',
    'v',
    'e',
    'l',
    'o',
    'p',
    'e',
    'r',
    '.',
  ]

  useEffect(() => {
    return setTimeout(() => {
      setLetterClass('text-animate-hover')
    }, 4000)
  }, [])

  return (
    <div className="container home-page">
      <div className="text-zone">
        <h1>
          <span className={letterClass}>H</span>
          <span className={`${letterClass} _12`}>i,</span>
          <br />
          <span className={`${letterClass} _13`}>I</span>
          <span className={`${letterClass} _14`}>'m</span>
          <img src={LogoTile} alt="Developer" />
          {/* Here I use pramter and put useState in it */}
          <AnimatedLetters
            letterClass={letterClass}
            strArray={nameArray}
            idx={15}
          />
          <br />
          <AnimatedLetters
            letterClass={letterClass}
            strArray={jobArray}
            idx={22}
          />
        </h1>
        <h2>Frontend Developer / JavaScript Expert </h2>
        <Link to="/contact" className="flat-button">
          Contact Me
        </Link>
      </div>
    </div>
  )
}

export default Home
