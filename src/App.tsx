import React from 'react'

const App = () => (
  <div style={{
    minHeight: '100vh',
    background: 'linear-gradient(135deg, #000000, #001a00)',
    color: '#00ff41',
    fontFamily: '"Courier New", monospace',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    textShadow: '0 0 20px #00ff41, 0 0 40px #00ff41',
  }}>
    <h1 style={{ fontSize: '6rem', margin: 0, letterSpacing: '0.15em' }}>
      SEQSWIFT PORTAL
    </h1>
    <p style={{ fontSize: '2.5rem', margin: '2rem 0 0', opacity: 0.9 }}>
      hacker edition // access granted
    </p>
  </div>
)

export default App
