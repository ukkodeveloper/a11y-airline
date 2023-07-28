import React from 'react';
import './App.css';
import SpinButton from './components/SpinButton';

function App() {
  return (
    <div
      className="App"
      style={{
        display: 'flex',
        flexDirection: 'column',
        rowGap: '20px',
      }}
    >
      <h1>승객 선택</h1>
      <SpinButton name="성인" />
      <SpinButton name="소아" />
      <SpinButton name="유아" />
    </div>
  );
}

export default App;
