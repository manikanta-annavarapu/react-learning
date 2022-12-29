# Props in functional component and class component

Props are used as one way data flow from parent component to child component.

Props can be passed to child component in the form of attributes in the child component tag.

Props are immutable, they are readonly values in component.

You may refer [App.js](./../src/App.js) file.

```HTML
<Greet name="Mani" />
```

`Greet` element can also have child elements like below

```HTML
<Greet name="Mani" >
    <h3>How are you?</h3> <!-- this line is a child element to Greet element -->
</Greet>
```

In this case, you can access child element using `{props.children}` JSX syntax examples in [GreetProps.js](./src/../../src/props/GreetProps.js).

## Props in functional component

Props in functional components can be accessible by passing `props` parameter in function.

Refer [GreetProps.js](./src/../../src/props/GreetProps.js)

```javascript
const GreetProps = (props) => {
  return (
    <div>
      <h1>Greet {props.name}</h1>
      {props.children}
    </div>
  );
};
```

## Props in class component

Props in class components can be accessible by `this.props`.

Refer [WelcomeProps.js](./src/../../src/props/WelcomeProps.js)

```js
class WelcomeProps extends Component {
  render() {
    return (
      <div>
        <h1>Welcome {this.props.name}</h1>
        {this.props.children}
      </div>
    );
  }
}
```
