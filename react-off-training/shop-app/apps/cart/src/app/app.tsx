// Uncomment this line to use CSS modules
// import styles from './app.module.css';
import NxWelcome from './nx-welcome';
import { eventBus, useEventBus } from '@shop-app/event-bus';

export function App() {
  useEventBus('my-event', (data) => {
    console.log('Received event in cart mfe', data);
  });
  return (
    <div>
      <button onClick={() => eventBus.emit('my-event', 'Hello from the cart')}>
        Emit event
      </button>
    </div>
  );
}

export default App;
