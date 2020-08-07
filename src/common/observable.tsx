type OnChangeCallback<T> = (source: T, property: Array<string>) => void;
type OnPropertyChangeCallback<T> = (source: T) => void;
type ObservableGetter<T,R> = (source: T) => R;
type ObservableSetter<T>   = (source: T) => Array<string>;

export default class Observable<T> {
    private object: T;
    private observers: Array<OnChangeCallback<T>> = [];
    private propertyObservers: { [key: string]: Array<OnPropertyChangeCallback<T>> } = {};

    constructor(object: T) {
        this.object = object;
    }

    getObject(): T {
        return this.object;
    }

    getValue(property: string): any {
        return (this.object as any)[property];
    }

    setValue(property: string, value: any): void {
        (this.object as any)[property] = value;
        this.notify(property);
    }

    get<R>(func: ObservableGetter<T, R>): R {
        return func(this.object);
    }

    set(func: ObservableSetter<T>): void {
        let changedProperties = func(this.object);
        this.notify(changedProperties);
    }

    notify(property: Array<string>|string|null = null) {
        let properties: Array<string>;
        if(Array.isArray(property))
            properties = property;
        else if(typeof property == 'string')
            properties = [ property ];
        else
            properties = [];

        this.notifyObservers(properties);
        if(properties.length > 0) {
            for(const prop of properties)
                this.notifyPropertyObservers(prop);
        }
    }

    notifyObservers(property: Array<string>) {
        for(const callback of this.observers)
            callback(this.object, property);
    }

    notifyPropertyObservers(property: string) {
        if(!this.propertyObservers[property])
            return;

        for(const callback of this.propertyObservers[property])
            callback(this.object);
    }

    clearObservers(): void {
        this.observers = [];
        this.propertyObservers = {};
    }

    subscribe(callback: OnChangeCallback<T>): void {
        this.observers.push(callback);
    }

    unsubscribe(callback: OnChangeCallback<T>): void {
        let index = this.observers.indexOf(callback);
        if(index != -1)
            this.observers.splice(index, 1);
    }

    subscribeToProperty(property: string, callback: OnPropertyChangeCallback<T>): void {
        if(!this.propertyObservers[property])
            this.propertyObservers[property] = [];

        this.propertyObservers[property].push(callback);
    }

    unsubscribeToProperty(property: string, callback: OnPropertyChangeCallback<T>): void {
        if(!this.propertyObservers[property])
            return;

        let index = this.propertyObservers[property].indexOf(callback);
        if(index != -1)
            this.propertyObservers[property].splice(index, 1);
    }
}
