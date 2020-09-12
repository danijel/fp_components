import React from 'react'
import logo from './logo.svg'
import './App.css'
import { DEMO_POSTS } from './fixtures/post_fixtures'
import { Posts } from './components/Posts'

function App() {
  return (
    <div className='App'>
      <header className='App-header'>
        <img src={logo} className='App-logo' alt='logo' />
        <a
          className='App-link'
          href='https://reactjs.org'
          target='_blank'
          rel='noopener noreferrer'
        >
          Learn React
        </a>
      </header>
      <Posts posts={DEMO_POSTS} />
    </div>
  )
}

export default App
