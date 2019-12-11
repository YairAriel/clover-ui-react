**Control the layout of flex containers with alignment, justification and more with responsive flexbox utilities**

#### **Direction**
By default, **`Flex`** applies **`flex-direction: row`** and can generally be omitted. However, there may be situations where you need to explicitly define it.
```jsx
import { Card, Flex } from "clover-ui-react";
import uuid from "uuid";

const ItemForExample = props => (
  <div style={{width: '100px',
               display: 'flex',
               justifyContent: 'center',
               alignItems: 'center',
               border: '1px solid #000000', 
               background: '#CCCCCC', 
               margin: '.5em',
               padding: '.3em 0',
               fontSize: '14px'}}>
    {props.children}
  </div>
);

<Flex>
  <Card margin="1em" padding="1em">
    <Flex>
    {Array.from({length: 3}, () => <ItemForExample key={uuid()}>default</ItemForExample>)}
    </Flex>
  </Card>

  <Card margin="1em" padding="1em">
    <Flex column>
      {Array.from({length: 3}, () => <ItemForExample key={uuid()}>column</ItemForExample>)}
    </Flex>
  </Card>
</Flex>
```

#### **Justify**
The **`justify`** flex setting can be changed using the flex justify classes.
This by default will modify the flexbox items on the x-axis but is reversed when using **`direction: column`**, modifying the y-axis. 
Choose from **`flex-start`** (browser default), **`flex-end`**, **`center`**, **`space-between`**, or **`space-around`**.
```jsx
import { Card, Flex } from "clover-ui-react";
import uuid from "uuid";

const ItemForExample = props => (
  <div style={{width: '100px',
               display: 'flex',
               justifyContent: 'center',
               alignItems: 'center',
               border: '1px solid #000000', 
               background: '#CCCCCC', 
               margin: '.5em',
               padding: '.3em 0',
               fontSize: '14px'}}>
    {props.children}
  </div>
);

<div>
   <Card margin="1em" padding="1em">
    <Flex>
      {Array.from({length: 3}, () => <ItemForExample key={uuid()}>default</ItemForExample>)}
    </Flex>
  </Card>

  <Card margin="1em" padding="1em">
    <Flex justify="center">
      {Array.from({length: 3}, () => <ItemForExample key={uuid()}>center</ItemForExample>)}
    </Flex>
  </Card>

  <Card margin="1em" padding="1em">
  <Flex justify="flex-end">
    {Array.from({length: 3}, () => <ItemForExample key={uuid()}>flex-end</ItemForExample>)}
  </Flex>
</Card>

  <Card margin="1em" padding="1em">
    <Flex justify="space-between">
      {Array.from({length: 3}, () => <ItemForExample key={uuid()}>space-between</ItemForExample>)}
    </Flex>
  </Card>

   <Card margin="1em" padding="1em">
    <Flex justify="space-around">
      {Array.from({length: 3}, () => <ItemForExample key={uuid()}>space-around</ItemForExample>)}
    </Flex>
  </Card>
</div>
```

#### **align**
The **`align`** flex setting can be changed using the flex align classes. 
This by default will modify the flexbox items on the y-axis but is reversed when using **`direction: column`**, 
modifying the x-axis. Choose from **`flex-start`**, **`flex-end`**, **`center`**, **`baseline`**, or **`stretch`** (browser default).
```jsx
import { Card, Flex } from "clover-ui-react";
import uuid from "uuid";

const ItemForExample = props => (
  <div style={{width: '100px',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        border: '1px solid #000000', 
        background: '#CCCCCC', 
        margin: '.5em',
        padding: '.3em 0',
        fontSize: '14px'}}>
    {props.children}
  </div>
);

<div>
  <Card height="120px" margin="1em" padding="1em">
    <Flex>
      {Array.from({length: 3}, () => <ItemForExample key={uuid()}>default</ItemForExample>)}
    </Flex>
  </Card>

  <Card height="120px" margin="1em" padding="1em">
    <Flex align="flex-start">
      {Array.from({length: 3}, () => <ItemForExample key={uuid()}>flex-start</ItemForExample>)}
    </Flex>
  </Card>

  <Card height="120px" margin="1em" padding="1em">
    <Flex align="center">
      {Array.from({length: 3}, () => <ItemForExample key={uuid()}>center</ItemForExample>)}
    </Flex>
  </Card>

  <Card height="120px" margin="1em" padding="1em">
    <Flex align="flex-end">
      {Array.from({length: 3}, () => <ItemForExample key={uuid()}>flex-end</ItemForExample>)}
    </Flex>
  </Card>

  <Card height="120px" margin="1em" padding="1em">
    <Flex align="baseline">
      {Array.from({length: 3}, () => <ItemForExample key={uuid()}>baseline</ItemForExample>)}
    </Flex>
  </Card>
</div>
```

#### **Props**
![#f03c15](https://placehold.it/15/f03c15/000000?text=+) `required`

Name | Type | Default | Description |
-----|----- | ------- | ----------- |
`column` | `Boolean` | `false` | Applies `flex-direction: column` to the component
`justify` | `string` | `flex-start` | Defines the `justify-content` style property
`align` | `string` | `stretch` | Defines the `align-items` style property
`margin` | `string` | `unset` | Applies margin to the component
`padding` | `string` | `unset` | Applies padding to the component

***
***