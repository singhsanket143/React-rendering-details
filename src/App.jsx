import { useState, memo, useCallback, useMemo } from 'react';
import './App.css'
// import SlowComponent from './SlowComponent';
import Modal from './modal';
import AnotherSlowComponent from './AnotherSlowComponent';

// const MemoisedSlowComponent = memo(function ModifiedSlowComponent({ time, custom, x }) {
//   return (<SlowComponent time={time} custom={custom} x={x} />);
// });

const MemoAnotherComponent = memo(AnotherSlowComponent);

function Child() {
  return <div>I am a child</div>
}

function App() {
  
  const [isOpen, setIsOpen] = useState(false);

  const [x, setX] = useState(0);

  // const someFunction = useCallback(() => {}, []);

  // const timeArray = useMemo(() => {
  //   return [1000];
  // }, []);

  const memoChild = useMemo(()=> {
    return <Child />
  }, []);

  return (
    <>
      <button onClick={() => setIsOpen(true)}>Open modal</button>
      <button onClick={() => setX(x+1)}>Increment</button>
      {isOpen && <Modal close={() => setIsOpen(false)} />}
      <div>
        Something done here
      </div>
      <div>
        Something done here
      </div>
      {/* <MemoisedSlowComponent time={timeArray} custom={someFunction} x={x} /> */}
      <MemoAnotherComponent>
        {memoChild}
      </MemoAnotherComponent>
    </>
  );
}

export default App
