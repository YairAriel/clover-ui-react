**Buttons are used to make common actions immediately visible and easy to perform with one click, tap, or keypress**

```jsx
import { Button, Flex } from "clover-ui-react";

<Flex>
    <Button>Button</Button>
    <Button disabled>Disabled</Button>
</Flex>
```


#### **Colors**
```jsx
import { Button, Flex } from "clover-ui-react";

<Flex>
    <Button>Default</Button>
    <Button color="danger">Danger</Button>
    <Button color="info">Info</Button>
    <Button color="warning">Warning</Button>
    <Button color="dark">Dark</Button>
</Flex>
```

#### **Sizes**
```jsx padded
import { Button, Flex } from "clover-ui-react";

<Flex align="center">
    <Button>Default</Button>
    <Button large>Large</Button>
</Flex>
```

#### **Round / Full width**
```jsx
import { Button, Flex } from "clover-ui-react";

<Flex column align="center">
  <Button round>round</Button>
  <Button fullwidth>fullwidth</Button>
</Flex>
```

#### **Props**
![#f03c15](https://placehold.it/15/f03c15/000000?text=+) `required`

Name | Type | Default | Description |
-----|----- | ------- | ----------- |
`round` | `Boolean` | `false` | If true, sets rounded borders in the component
`fullwidth` | `Boolean` | `false` | If true, sets a 100% width and no `border-radius` to the component
`large` | `Boolean` | `false` | Makes the component large
`disabled` | `Boolean` | `false` | Removes the ability to click or target the component
`color ` | `string` | ![#1A6626](https://placehold.it/15/1a6626/000000?text=+) `#1A6626` | Applies the color from a closed list based on the theme
![#f03c15](https://placehold.it/15/f03c15/000000?text=+) `onClick` |  `() => void` | `() => {}` | Handler called when the user clicks the component

***
***