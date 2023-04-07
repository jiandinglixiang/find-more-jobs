import { useState } from 'react';
import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
import style from './App.module.scss';

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="App">
      <div>
        <a href="https://vitejs.dev" target="_blank" rel="noreferrer">
          <img src={viteLogo} className={style.logo} alt="Vite logo" />
        </a>
        <a href="https://reactjs.org" target="_blank" rel="noreferrer">
          <img
            src={reactLogo}
            className={`${style.logo} ${style.react}`}
            alt="React logo"
          />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className={style.card}>
        <button onClick={() => setCount((count) => count + 2)}>
          count2345 is {count}
        </button>
        <p>
          Edit <code>src/App.tsx</code> and save to test HMR
        </p>
      </div>
      <p className={style['read-the-docs']}>
        Click on the Vite and React logos to learn more
      </p>
    </div>
  );
}

export default App;
