import { useState, useEffect, useCallback } from 'react';
import generateRandomColor from 'lib/generate-random-color';
import Spacer from 'components/spacer';
import Mousetrap from 'mousetrap';

export default function Home() {
  const [color, setColor] = useState(generateRandomColor());
  const [showMessage, setShowMessage] = useState(false);

  useEffect(() => {
    setupKeybinds();
  }, [color]);

  const handleRefreshColor = (e) => {
    setColor(generateRandomColor());
  };

  const handleCopyClick = (e) => {
    const el = document.createElement('textarea');
    el.value = color;
    document.body.appendChild(el);
    el.select();
    document.execCommand('copy');
    document.body.removeChild(el);
    setShowMessage(true);
    setTimeout(() => {
      setShowMessage(false);
    }, 1000);
  };

  function setupKeybinds() {
    Mousetrap.bind('r', () => handleRefreshColor());
    Mousetrap.bind('c', handleCopyClick);
  }

  return (
    <>
      <div className="color-container">
        <div className="color"></div>
        <Spacer y={2}></Spacer>
        <div className="color-code">
          {showMessage ? (
            <span className="animate__animated animate__slideInLeft copied-text">
              Copied
            </span>
          ) : (
            <>
              <p>{color}</p>

              <div>
                <button onClick={handleCopyClick}>
                  <img src="/copy.svg" alt="" />
                </button>
                <Spacer x={1} inline></Spacer>
                <button onClick={handleRefreshColor}>
                  <img src="/refresh-cw.svg" alt="" />
                </button>
              </div>
            </>
          )}
        </div>
        <div className="shortcut-keys">
          <p>[r] - Change color</p>
          <Spacer y={0.5}></Spacer>
          <p>[c] - Copy color</p>
        </div>
      </div>
      <style jsx>
        {`
          .color-container {
            display: flex;
            align-items: center;
            flex-direction: column;
            justify-content: center;
            height: 100vh;
            width: 100vw;
          }

          .color {
            background: ${color};
            height: 250px;
            width: 250px;
            border-radius: 50%;
            border: 10px solid #fff;
            box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
          }

          .color-code {
            position: relative;
            overflow: hidden;
            box-sizing: border-box;
            display: flex;
            color: #666;
            align-items: center;
            justify-content: space-between;
            background: #fff;
            height: 42px;
            min-width: 250px;
            font-size: 18px;
            padding: 0 16px;
            border-radius: 8px;
            box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
          }

          button {
            background: white;
            height: 32px;
            width: 32px;
            display: inline-flex;
            align-items: center;
            outline: black;
            border: 0px;
            justify-content: center;
          }

          button > img {
            filter: invert();
          }

          button:hover > img {
            filter: none;
          }

          .shortcut-keys {
            justify-content: center;
            display: flex;
            flex-direction: column;
            padding: 10px;
            color: #666;
            font-size: 12px;
          }

          .shortcut-keys * {
            padding: 0;
            margin: 0;
          }
        `}
      </style>
    </>
  );
}
