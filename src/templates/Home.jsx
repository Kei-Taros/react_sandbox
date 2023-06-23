import React from 'react'
import { Link } from 'react-router-dom'

const Home = () => {

  return (
    <div>
      <h1>
        Home
      </h1>
      <div>
        Counter to <Link to={`/counter`}>this.</Link>
      </div>
    </div>
  )
}

export default Home;