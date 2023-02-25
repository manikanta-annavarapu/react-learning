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

Consider below code from [ClassEventBinding.js](../src/eventHandling/ClassEventBinding.js)

```jsx
  clickHandler() {
    this.setState({
      message: "ClassEventBinding Button Clicked",
    });
    console.log(this); // this will log 'undefined'
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

If you run the above code, it will throw an error saying <span style="color:red">Cannot read properties of undefined (reading 'setState')</span> because of the typical behavior of `this` keyword.

Well this is the reason, why we need to bind the event properly in order to utilize this events.

There are number of ways to bind the events, lets look at them below.

### First Approach of Event Binding (Binding in the render method)

```jsx
  constructor(props) {
    super(props);

    this.state = {
      message: "Hello",
    };
  }

  clickHandler() {
    this.setState({
      message: "ClassEventBinding Button Clicked",
    });
    console.log(this); // this will log class instance object
  }

  render() {
    return (
      <div>
        <h3>{this.state.message}</h3>
        <button onClick={this.clickHandler.bind(this)}> ClassEventBinding Click</button>
        {/*Notice the binding on the onClick attribute in the above line.*/}
      </div>
    );
  }
```

Although above code works perfectly well, as the event handler is changing the state which cause the component to re-render, so this re-render in turn generate a brand new event handler on every render, this behavior may not impact small applications but may cause significant impact on large applications and components that contain nested children compoments.

### Second Approach of Event Binding (Arrow functions in the render method)

```jsx
  constructor(props) {
    super(props);

    this.state = {
      message: "Hello",
    };
  }

  clickHandler() {
    this.setState({
      message: "ClassEventBinding Button Clicked",
    });
    console.log(this); // this will log class instance object
  }

  render() {
    return (
      <div>
        <h3>{this.state.message}</h3>
        <button onClick={()=>this.clickHandler()}> ClassEventBinding Click</button>
        {/*Notice the arrow function on the onClick attribute in the above line.*/}
      </div>
    );
  }
```

Similar to first approach, this also has some performance implications.

### Third Approach of Event Binding (Binding in the constructor)

```jsx
  constructor(props) {
    super(props);

    this.state = {
      message: "Hello",
    };

    this.clickHandler = this.clickHandler.bind(this);
    {/*Notice the binding in the above line.*/}
  }

  clickHandler() {
    this.setState({
      message: "ClassEventBinding Button Clicked",
    });
    console.log(this); // this will log class instance object
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

This is the approach, which could be seen in many examples and also seen in the official react documentations. In this approach binding is happens once in the constructor this is better compare to binding the render method.

### Fourth and Final Approach of Event Binding (Binding in the constructor)

```jsx
  constructor(props) {
    super(props);

    this.state = {
      message: "Hello",
    };
  }

  /*Notice the clickHandler as arrow function in the below line.*/
  clickHandler = () => {
    this.setState({
      message: "ClassEventBinding Button Clicked",
    });
    console.log(this); // this will log class instance object
  };

  render() {
    return (
      <div>
        <h3>{this.state.message}</h3>
        <button onClick={this.clickHandler}>ClassEventBinding Click</button>
      </div>
    );
  }
```

In this approach, the event handler method is defined as an arrow function.

### Important Point to Remember

Event handler has to be the function, but not function call.

Regarding Event Binding Approaches

- The first approach is better not to use, because of the performance implications.
- The second approach is the easist way to bind and pass the parameters. If your code, doesn't involve rendering nested children this approach is still a viable option.
- The third approach is suggested from the react official documentations
- The fourth approach is suggested from the react official documentations but this is still experimental

### Resources

[ReactJS Tutorial - 14 - Binding Event Handlers](https://www.youtube.com/watch?v=kVWpBtRjkCk)
