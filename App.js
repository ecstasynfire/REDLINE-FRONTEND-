import React, { useState } from "react";
import "./styles.css";

export default function App() {
  const [balance, setBalance] = useState(10000);
    const [betAmount, setBetAmount] = useState(50);
      const [gameActive, setGameActive] = useState(false);
        const [result, setResult] = useState(null);

          const handlePlay = () => {
              if (betAmount > balance) return;
                  setGameActive(true);
                      const multiplier = (Math.random() * (5 - 1.01) + 1.01).toFixed(2);
                          const winAmount = (betAmount * multiplier).toFixed(2);
                              setTimeout(() => {
                                    setBalance(balance - betAmount + parseFloat(winAmount));
                                          setResult(`Multiplier: ${multiplier}x | Winnings: ₹${winAmount}`);
                                                setGameActive(false);
                                                    }, 1000);
                                                      };

                                                        const handleBrake = () => {
                                                            setGameActive(false);
                                                                setResult("BRAKE activated. Game stopped.");
                                                                  };

                                                                    return (
                                                                        <div className="container">
                                                                              <h1>Balance: ₹{balance.toFixed(2)}</h1>

                                                                                    <div className="cockpit">
                                                                                            <div>🛩️ REDLINE COCKPIT</div>
                                                                                                    <div>🔁 Multiplier Radar</div>
                                                                                                            <div>🎯 Sweet Spot Tracker</div>
                                                                                                                    <div>🚀 Last Results</div>
                                                                                                                            <div>🔐 Hash: FAKEHASH123</div>
                                                                                                                                  </div>

                                                                                                                                        <input
                                                                                                                                                type="number"
                                                                                                                                                        value={betAmount}
                                                                                                                                                                onChange={(e) => setBetAmount(parseFloat(e.target.value) || 0)}
                                                                                                                                                                      />

                                                                                                                                                                            <div className="buttons">
                                                                                                                                                                                    <button onClick={handlePlay} disabled={gameActive}>
                                                                                                                                                                                              INITIATE SEQUENCE
                                                                                                                                                                                                      </button>
                                                                                                                                                                                                              <button onClick={handleBrake}>BRAKE</button>
                                                                                                                                                                                                                    </div>

                                                                                                                                                                                                                          {result && <p>{result}</p>}
                                                                                                                                                                                                                              </div>
                                                                                                                                                                                                                                );
                                                                                                                                                                                                                                }