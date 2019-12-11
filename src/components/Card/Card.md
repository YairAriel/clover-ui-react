**The card component is a versatile component that can be used for anything from a panel to a static image**

```jsx
import { Card } from "clover-ui-react";

<Card margin="1em" padding="1em">
  Hello World!
</Card>
```

#### **Dark**
```jsx
import { Card } from "clover-ui-react";

<Card dark margin="1em" padding="1em">
  Hello World!
</Card>
```

#### **Width**
```jsx
import { Card, Flex } from "clover-ui-react";

<Flex column>
  <Card width="200px" margin="1em" padding="1em">
    200px
  </Card>
  <Card width="40%" margin="1em" padding="1em">
    40%
  </Card>
  <Card width="50vw" margin="1em" padding="1em">
    50vw
  </Card>
</Flex>
```

#### **Height**
```jsx
import { Card, Flex } from "clover-ui-react";

<Flex>
  <Card margin="1em" padding="1em">
    Default
  </Card>
  <Card height="100px" margin="1em" padding="1em">
    100px
  </Card>
  <Card height="4em" margin="1em" padding="1em">
    4em
  </Card>
  <Card height="15vh" margin="1em" padding="1em">
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