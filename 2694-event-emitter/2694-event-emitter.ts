type Callback = (...args: any[]) => any;
type Subscription = {
    unsubscribe: () => void
}

class EventEmitter {
    private events: Map<string, Array<Function>>;
    constructor(){
        this.events = new Map();
    }
    subscribe(eventName: string, callback: Callback): Subscription {
        if(!this.events.has(eventName)){
            this.events.set(eventName,[]);
        }
        const eventListeners = this.events.get(eventName);
        eventListeners.push(callback);
        return {
            unsubscribe: () => {
                const idx = eventListeners.indexOf(callback);
                if(idx !== -1){
                    eventListeners.splice(idx,1);
                }
            }
        };
    }
    
    emit(eventName: string, args: any[] = []): any[] {
        if(!this.events.has(eventName)) return [];

        const results: any[] = [];
        const eventListeners = this.events.get(eventName);
        for(const listener of eventListeners){
            results.push(listener(...args));
        }
        return results;
    }
}

/**
 * const emitter = new EventEmitter();
 *
 * // Subscribe to the onClick event with onClickCallback
 * function onClickCallback() { return 99 }
 * const sub = emitter.subscribe('onClick', onClickCallback);
 *
 * emitter.emit('onClick'); // [99]
 * sub.unsubscribe(); // undefined
 * emitter.emit('onClick'); // []
 */