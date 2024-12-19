type Callback = (payload: any) => void;

class EventBus {
  // { test_event: [sub1, sub2], demo_event: [sub1, sub2] }
  private events: { [eventName: string]: Callback[] } = {};
  // used by subscribers
  subscribe(eventName: string, callback: Callback) {
    // check if event already enlisted
    if (!this.events[eventName]) {
      //if event does not exist, create a new set of subscribers for the event
      this.events[eventName] = [];
    }
    //add new subscriber to the set of subscribers for the event
    this.events[eventName].push(callback);

    // return a function that will remove the subscriber from the set of subscribers
    return () => {
      this.events[eventName] = this.events[eventName].filter(
        (eventCallback) => callback !== eventCallback
      );
    };
  }

  // publisher
  emit(eventName: string, payload: any) {
    const callbacks = this.events[eventName];

    //callbacks are the subscribers
    if (callbacks) {
      callbacks.forEach((callback) => callback(payload));
    }
  }
}

export const eventBus = new EventBus();
