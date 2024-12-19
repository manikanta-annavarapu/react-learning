import { useEffect } from 'react';
import { eventBus } from './event-bus';

export function useEventBus(
  eventName: string,
  callback: (payload: any) => void
) {
  useEffect(() => {
    const unsubcribe = eventBus.subscribe(eventName, callback);

    return () => {
      unsubcribe();
    };
  }, [eventName, callback]);
  return 'event-bus';
}
