**Provides a decorated input text element**

```jsx
import TextField from "./TextField";
import Flex from "../Flex/Flex";

<Flex justify="space-around">
    <TextField labelText="Input label" placeholder="Type here"/>
    <TextField labelText="Disabled" placeholder="Disabled text" disabled/>
</Flex>
```

#### **Label Colors**
```jsx
import TextField from "./TextField";
import Flex from "../Flex/Flex";

<Flex justify="space-around">
    <TextField labelText="Input label" placeholder="Type here" labelColor="rgb(220, 53, 69)"/>
    <TextField labelText="Input label" placeholder="Type here" labelColor="#17A2B8"/>
</Flex>
```

#### **Text Colors**
```jsx
import TextField from "./TextField";
import Flex from "../Flex/Flex";

<Flex justify="space-around">
    <TextField labelText="Input label" placeholder="Type here" value="Default" onChange={() => {}}/>
    <TextField labelText="Input label" placeholder="Type here" textColor="#17A2B8" value="Some blue" onChange={() => {}}/>
</Flex>
```

#### **More Characters**
```jsx
import TextField from "./TextField";
import Flex from "../Flex/Flex";

<Flex justify="space-around">
    <TextField labelText="Rounded" placeholder="Type here" rounded/>
    <TextField labelText="Not Valid" placeholder="Type here" isNotValid/>
</Flex>
```

#### **Props**
![#f03c15](https://placehold.it/15/f03c15/000000?text=+) `required`

Name | Type | Default | Description |
-----|----- | ------- | ----------- |
`placeholder` | `string` | `''` | Placeholder text
`disabled` | `Boolean` | `false` | Removes the ability to type in the component
`labelColor` | `string` | ![#000000](https://placehold.it/15/000000/000000?text=+) `#000000` |  Applies the label's color (can receive any valid CSS color)
`labelText` | `string` | `''` | Set the label's text
`textColor` | `string` | ![#000000](https://placehold.it/15/000000/000000?text=+) `#000000` | Applies the input value color (can receive any valid CSS color)
`rounded` | `Boolean` | `false` | If true, set a slight border radius to the input
![#f03c15](https://placehold.it/15/f03c15/000000?text=+) `value` | `string` | `''` | Set the value of the field 
`autocomplete` | `Boolean` | `false` | Autocomplete attribute for input
`isNotValid` | `Boolean` | `false` | If true, the value is not valid
![#f03c15](https://placehold.it/15/f03c15/000000?text=+) `tabindex` | `Number\ string` | `''` | Tab index of the control
![#f03c15](https://placehold.it/15/f03c15/000000?text=+) `onChange` | `() => void` | `() => {}` | Callback for value change event on the text field
`onFocus` | `() => void` | `() => {}` | Callback for focus event on the text field
`onBlur` | `() => void` | `() => {}` | Callback for blur event on the text field

***
***