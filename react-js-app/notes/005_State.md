# State

A state in react is generally used to read/write/modify the content/values within the component.

Refer to [Subscription.js](./..src/../../src/state/Subscription.js)

You should always use `this.setState({key: value})` if it is a class component like in [Counter.js](./../src/state/Counter.js#L18)

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

1. About `increment()` method in [Counter.js](./../src/state/Counter.js#L11)

   - `increment()` method is very simple and straight forward which increment the value and console logs it, however if you observe the console logs it logs the previous value. `this.setState({})` method is an asynchronous method, hence console log statement executes before the `this.setState({})` method async task is completed. To fix this we have created `incrementAsync()` method.

2. About `incrementAsync()` method in [Counter.js](./../src/state/Counter.js#L18)

   - In order to print the current value of count, we await the `this.setState({})` method like in `incrementAsync()` method and then console logs the count value.

3. About `incrementWithoutSetState()` method in [Counter.js](./../src/state/Counter.js#L56)

   - As we already spoke about it, updating the state of any object directly, it will update the value, however updated value will not be visible in the UI, because updating state directly will not trigger re-render.

4. About `incrementSetStateWithCallback()` method in [Counter.js](./../src/state/Counter.js#L44)

   - When you don't want to await the `this.setState({})` method, you can pass the callback function like in `incrementSetStateWithCallback()`

5. About `incrementThreeWillNotWork()` method in [Counter.js](./../src/state/Counter.js#L32)

   - Considering a complex scenario where you want to increment the count by 3, which is accomplished by calling `increment()` method 3 times inside `incrementThreeWillNotWork()` method, however when you try it won't work expected count value should 3 but actual value will be 1.
   - Reason behind this behavior is React may group multiple setState calls into a single update for better performance. In this case all the 3 setState calls inside `increment()` method are done in one single update and updated value doesn't carry over between the different calls.
   - In order to fix this look at `incrementThreeWillWorkWithIncrementAsync()` method or `incrementThreeWillWork()` method.

6. About `incrementSetStateByPassingArrowFunction()` method in [Counter.js](./../src/state/Counter.js#L25)

   - This is another way of safely updating the state of an object, passing the arrow function gives you advantage of accessing the value of prevState by passing as function parameter.
   - To differentiate btw setState using arrow function and setState by passing the object, can only be identified by observing `incrementThreeWillWork()` method and `incrementThreeWillNotWork` method.

7. About `incrementThreeWillWork()` method in [Counter.js](./../src/state/Counter.js#L45)

   - As discussed above, this method will work as expected, as we are calling `incrementSetStateByPassingArrowFunction()` method 3 times inside, where every time we call it, the state will have the synchronous previous value.

## Important Point to Remember

- Always make use of setState and never modify the state directly.
- Code which has to be executed after the state has been updated should be placed in the callback function which is second argument to the setState method.
- When you have to update state based on the previous state value, pass in a function as an argument instead of the regular object.
- Overall, updating the state value using the setState method passing the arrow function is the safest way.

TODO explanation for below methods in [Counter.js](./../src/state/Counter.js)

- [x] incrementAsync
- [x] incrementSetStateWithCallback
- [x] incrementThreeWillNotWork
- [x] incrementSetStateByPassingArrowFunction
- [x] incrementThreeWillWork

## State vs Props

| Props                                                                                            | State                                                                               |
| ------------------------------------------------------------------------------------------------ | ----------------------------------------------------------------------------------- |
| props get passed to components                                                                   | state is managed within the component                                               |
| props are function parameters                                                                    | variables defined/declared in the function body can be state                        |
| props are immutable                                                                              | state can be changed                                                                |
| Access by - props as function parameters in Functional Component - this.props in Class Component | Access by - useState Hook in Functional Components - this.state in Class Components |
