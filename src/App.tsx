import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { TonConnectUI } from '@tonconnect/ui';

function App() {
  const [count, setCount] = useState(0);
  const [ui, setUI] = useState<any>(null);

  async function connectToWallet() {
    const connectedWallet = await ui.connectWallet();
    // 如果需要，可以对connectedWallet做一些事情
    console.log(connectedWallet);
  }
  useEffect(() => {
    const tonConnectUI = new TonConnectUI({
      manifestUrl: 'https://<YOUR_APP_URL>/tonconnect-manifest.json',
    });
    setUI(tonConnectUI);
  }, []);
  return (
    <>
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
      </div>
        {/* Here we add our button with alert callback */}
      <div className="card">
        <button onClick={connectToWallet}>
            Connect Wallet
        </button>
      </div>
    </>
  )
}

export default App
