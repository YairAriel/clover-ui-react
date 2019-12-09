**The card component is a versatile component that can be used for anything from a panel to a static image**

```jsx
import Card from "./Card.js";

<Card>
  Hello World!
</Card>
```

#### **Dark**
```jsx
import Card from "./Card.js";

<Card dark>
  Hello World!
</Card>
```

#### **Width**
```jsx
import Card from "./Card.js";
import Flex from "../Flex/Flex";

<Flex column>
  <Card width="200px">
    200px
  </Card>
  <Card width="40%">
    40%
  </Card>
  <Card width="50vw">
    50vw
  </Card>
</Flex>
```

#### **Height**
```jsx
import Card from "./Card";
import Flex from "../Flex/Flex";

<Flex>
  <Card>
    Default
  </Card>
  <Card height="100px">
    100px
  </Card>
  <Card height="4em">
    4em
  </Card>
  <Card height="15vh">
    15vh
  </Card>
</Flex>
```

#### **Props**
![#f03c15](https://placehold.it/15/f03c15/000000?text=+) `required`

Name | Type | Default | Description |
-----|----- | ------- | ----------- |
`dark` | `Boolean` | `false` | Applies the dark background to the component
`width` | `string` | `''` | Sets the width for the component
`height` | `string` | `''` | Sets the height for the component

***
***