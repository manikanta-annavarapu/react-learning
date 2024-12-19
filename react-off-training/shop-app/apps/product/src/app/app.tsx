// Uncomment this line to use CSS modules
// import styles from './app.module.css';
import NxWelcome from './nx-welcome';

export function App() {
  const emitEvent = () => {
    const event = new CustomEvent('product_mfe_event', {
      detail: { message: 'Hello from product' },
    });
    window.dispatchEvent(event);
  };
  return (
    <div>
      <h1>PRODUCT MFE</h1>
      <button onClick={emitEvent}>Product Click</button>
      <NxWelcome title="product" />
    </div>
  );
}

export default App;
