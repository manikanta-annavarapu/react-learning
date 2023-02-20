# Event Handling in React

Event Handlers help us to know about the user actions, so that we can write some code upon it.

## Event Handling in Functional Component

A basic example of Event Handling in Functional Component is in the [FunctionClick.js](../src/eventHandling/FunctionClick.js)

Below is the good syntax

```jsx
<button onClick={clickHandler}> Click</button>
```

Below is the bad syntax

```jsx
<button onClick={clickHandler()}> Click</button>
```

Pay attention to the above code line where we are passing the function without paranthesis `onClick={clickHandler}`, we should not pass it like this `onClick={clickHandler()}` because it will always becomes a function call.

## Event Handling in Class Component

A basic example of Event Handling in Class Component is in the [ClassClick.js](../src/eventHandling/ClassClick.js)

Below is the good syntax

```jsx
<button onClick={this.clickHandler}> Click</button>
```

Below is the bad syntax

```jsx
/*
 * This will cause a infinite re-renders as, we are calling the function clickHandler()
 * and if the function changes the state which will cause re-rendering.
 */
<button onClick={this.clickHandler()}> Click</button>
```

## Binding Event Handling in React

In event binding, it is really necessary to bind the event handler because of the typical behavior of `this` keyword in javascript.

Consider below code from [ClassEventBinding](../src/eventHandling/ClassEventBinding.js)

```jsx
  clickHandler() {
    this.setState({
      message: "ClassEventBinding Button Clicked",
    });
  }

  render() {
    return (
      <div>
        <h3>{this.state.message}</h3>
        <button onClick={this.clickHandler}> ClassEventBinding Click</button>
      </div>
    );
  }
```

### Important Point to Remember

Event handler has to be the function, but not function call.
