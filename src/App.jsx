import './App.css'
import ButtonWithModal from './ButtonWithModal';
import SlowComponent from './SlowComponent';
import RefactorComponent from './RefactorComponent';

function App() {
  
  return (
    <>
      
      <RefactorComponent myChild={<div>hello</div>}>
        <>
          <div>
            Something done here
          </div>
          <ButtonWithModal />
          <div>
            Something done here
          </div>
          <SlowComponent />
        </>
      </RefactorComponent>
      
    </>
  );
}

export default App
