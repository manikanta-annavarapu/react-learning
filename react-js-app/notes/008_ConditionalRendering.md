# Conditional Rendering

Four different approaches of conditional rendering

- [Conditional Rendering](#conditional-rendering)
  - [if/else conditional rendering](#ifelse-conditional-rendering)
  - [element variables conditional rendering](#element-variables-conditional-rendering)
  - [ternary conditional rendering](#ternary-conditional-rendering)
  - [short circuit conditional rendering](#short-circuit-conditional-rendering)

## if/else conditional rendering

we will use the if/else statements of javascript in react for conditionally rendering content/component.

Example available at [UserGreeting.js](../src/conditionalRendering/UserGreeting.js)

```jsx
  constructor(props) {
    super(props);

    this.state = {
      isLoggedIn: true,
    };
  }
  render() {
    if (this.state.isLoggedIn) {
      return (
        <div>
          <h1>Welcome Mani</h1>
        </div>
      );
    } else {
      return (
        <div>
          <h1>Welcome Guest</h1>
        </div>
      );
    }
  }
```

from the above it is very simple to say that depending upon the `state` variable `isLoggedIn` UserGreeting component returns the respective jsx.

Here, there is a lot of repetitive code inside the `render()` method. So you may think, that why can't we apply if/else directly on message(like 'Welcome Mani' and 'Welcome Guest'). We can not apply if/else inside JSX because JSX is just a syntactic sugar for function calls and object construction, so it is invalid to add if/else inside JSX.

## element variables conditional rendering

In this case(as an alternative solution from if/else conditional rendering), we can set a message in the variable based on the if/else condition and display the message.

```jsx
  constructor(props) {
    super(props);

    this.state = {
      isLoggedIn: true,
    };
  }
  render() {
    let message;

    if (this.state.isLoggedIn) {
      message = <h1>Welcome Mani</h1>;
    } else {
      message = <h1>Welcome Guest</h1>;
    }

    return <div>{message}</div>;
  }
```

## ternary conditional rendering

It is pretty straight forward where we use ternary operator `(condition) ? <true block> : <false block>`.

```jsx
  constructor(props) {
    super(props);

    this.state = {
      isLoggedIn: true,
    };
  }

  render() {
    return this.state.isLoggedIn ? (
      <h1>Welcome Mani</h1>
    ) : (
      <h1>Welcome Guest</h1>
    );
  }
```

## short circuit conditional rendering

When you want to render something on nothing, then you will make use of short circuit conditional rendering.

```jsx
  constructor(props) {
    super(props);

    this.state = {
      isLoggedIn: true,
    };
  }

  render() {
    return this.state.isLoggedIn && <h1>Welcome Mani</h1>;
  }

```
