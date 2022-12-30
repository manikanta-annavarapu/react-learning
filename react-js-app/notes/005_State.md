# State

A state in react is generally used to read/write/modify the content/values.

Refer to [Subscription.js](./..src/../../src/state/Subscription.js)

## State vs Props

| Props                                                                                            | State                                                                               |
| ------------------------------------------------------------------------------------------------ | ----------------------------------------------------------------------------------- |
| props get passed to components                                                                   | state is managed within the component                                               |
| props are function parameters                                                                    | variables defined/declared in the function body can be state                        |
| props are immutable                                                                              | state can be changed                                                                |
| Access by - props as function parameters in Functional Component - this.props in Class Component | Access by - useState Hook in Functional Components - this.state in Class Components |
