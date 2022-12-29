# Miscellaneous or Other Topics

## `export` vs `export default`

Here [Welcome.js](./../src/components/Welcome.js) and [Greet.js](./../src/components/Greet.js) are exported using `export default`, however [Hello.js](./../src/components/Hello.js) is exported using `export`

So the difference is visible when they are imported and utilized, observe how these component are imported in [App.js](./../src/App.js)

```javascript
import Greet from "./components/Greet";
// export function or class should be import with exact names in curly brackets
import { Hello } from "./components/Hello";
// export default function or class can be renamed to your preferred name like below
import Wel from "./components/Welcome";
```

---

## something for test
