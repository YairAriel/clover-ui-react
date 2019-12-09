**This component is used to display wait states**

```jsx
import Progress from "./Progress";

<Progress />
```

#### **Colors**
```jsx
import Progress from "./Progress";
import Flex from "../Flex/Flex";

<Flex justify="space-around" align="center">
    <Progress color="#FFC107" />
    <Progress color="rgb(220, 53, 69)"/>
    <Progress color="#17A2B8"/>
    <Progress color="pink"/>
</Flex>
```

#### **Sizes**
```jsx
import Progress from "./Progress";
import Flex from "../Flex/Flex";

<Flex justify="space-around" align="center" padding="1em">
    <Progress size="small" />
    <Progress />
    <Progress size="large" />
</Flex>
```

#### **Bars**
```jsx
import Progress from "./Progress";
import Flex from "../Flex/Flex";

<Flex justify="space-around" align="center">
    <Progress bars="2" />
    <Progress />
    <Progress bars="7" />
</Flex>
```

#### **Props**
![#f03c15](https://placehold.it/15/f03c15/000000?text=+) `required`

Name | Type | Default | Description |
-----|----- | ------- | ----------- |
`color` | `string` | ![#1A6626](https://placehold.it/15/1a6626/000000?text=+) `#1A6626` | Applies the slots color (can receive any valid CSS color)
`size` | `string` | `normal` | Applies the slot's size
`bars` | `number` | `4` | Applies the amounts of loading bars

***
***