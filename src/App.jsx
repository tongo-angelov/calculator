import { useEffect, useState } from 'react';
import { calculate, op } from './calculator';
import Display from './components/Display/Display';
import Panel from './components/Panel/Panel';

import './App.css';

const App = () => {
  const [data, setData] = useState({
    total: 0,
    display: "0",
    next: 0,
    operation: null
  });

  const handleButton = (label) => {
    handleInput(label);
  };

  const handleInput = (input) => {
    if (input.match(/^[0-9]$/)) {
      setData(data => {
        if (data.operation === op.res) {
          return ({ ...data, display: input, next: Number(input), operation: null });
        }
        const value = data.display.endsWith('.') ? (data.display + input) : Number(data.display + input);
        return ({ ...data, display: String(value), next: Number(value) });
      });
    }
    if (input === '.') {
      setData(data => {
        if (!data.display.includes('.'))
          return ({ ...data, display: data.display + '.' });
        return data;
      });
    }
    if (input === '!' || input === '+/-') {
      setData(data => {
        const value = data.next * -1;
        return ({ ...data, display: String(value), next: value });
      });
    }
    if (input === '+') {
      setData(data => {
        if (data.operation === null)
          return ({ total: Number(data.display), display: "0", next: 0, operation: op.add });

        return ({ ...data, display: "0", next: 0, operation: op.add });
      });
    }
    if (input === '-') {
      setData(data => {
        if (data.operation === null)
          return ({ total: Number(data.display), display: "0", next: 0, operation: op.sub });

        return ({ ...data, display: "0", next: 0, operation: op.sub });
      });
    }
    if (input === '*' || input === 'X') {
      setData(data => {
        if (data.operation === null)
          return ({ total: Number(data.display), display: "0", next: 0, operation: op.mul });

        return ({ ...data, display: "0", next: 0, operation: op.mul });
      });
    }
    if (input === '/') {
      setData(data => {
        if (data.operation === null)
          return ({ total: Number(data.display), display: "0", next: 0, operation: op.div });

        return ({ ...data, display: "0", next: 0, operation: op.div });
      });
    }
    if (input === 'Enter' || input === '=') {
      setData(data => {
        if (data.operation !== null && data.operation !== op.res) {
          const result = calculate(data.total, data.next, data.operation);
          return ({ ...data, total: result, display: String(result), operation: op.res });
        }
        return data;
      });
    }
    if (input === 'Backspace' || input === 'C') {
      setData(data => {
        let display = data.display.slice(0, -1);
        if (display === '')
          display = '0';
        return ({ ...data, display, next: Number(display) });
      });
    }
    if (input === 'Delete' || input === 'CE') {
      setData(data => ({ total: 0, display: "0", next: 0, operation: null }));
    }
  };

  useEffect(() => {
    window.addEventListener('keydown', (e) => {
      // console.log('key: ', e.key);
      if (e.key.match(/^[0-9,\-,+,*,\/,.,!]$/) || e.key === 'Enter' || e.key === 'Backspace' || e.key === 'Delete')
        handleInput(e.key);
    });
    return () => {
      window.removeEventListener('keydown', () => { console.log('REMOVE EVENT'); });
    };
  }, []);

  return (
    <div className="calculator">
      <Display data={data.display} op={data.operation} />
      <Panel onClick={handleButton} />
    </div>
  );
};

export default App;
