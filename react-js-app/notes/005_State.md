# State

A state in react is generally used to read/write/modify the content/values within the component.

Refer to [Subscription.js](./..src/../../src/state/Subscription.js)

You should always use `this.setState({key: value})` like in [Counter.js](./../src/state/Counter.js#L18)

```jsx
increment() {
  this.setState({
    count: this.state.count + 1,
  });
}
```

and shouldn't directly use `this.state.key = this.state.key + 1` (or whatever modification that you wanna do)

In [Counter.js](./../src/state/Counter.js) > `incrementWithoutSetState()` method.

```js
incrementWithoutSetState() {
  this.state.count = this.state.count + 1;
}
```

## Note

In case if you are the updating the state of any object directly, it will update the value, however updated value will not be visible in the UI, because updating state directly will not trigger re-render. Hence using `this.setState({key: value})` method for updating state will trigger re-render and updated value will be visible in UI.

## setState()

TODO explanation for below methods in [Counter.js](./../src/state/Counter.js)

- [ ] incrementAsync
- [ ] incrementSetStateWithCallback
- [ ] incrementThreeWillNotWork
- [ ] incrementSetStateByPassingArrowFunction
- [ ] incrementThreeWillWork

## State vs Props

| Props                                                                                            | State                                                                               |
| ------------------------------------------------------------------------------------------------ | ----------------------------------------------------------------------------------- |
| props get passed to components                                                                   | state is managed within the component                                               |
| props are function parameters                                                                    | variables defined/declared in the function body can be state                        |
| props are immutable                                                                              | state can be changed                                                                |
| Access by - props as function parameters in Functional Component - this.props in Class Component | Access by - useState Hook in Functional Components - this.state in Class Components |
