# react-breadcrumb

React Breadcrumb

## Usage

```js
import React from 'react';
import ReactDOM from 'react-dom';
import Breadcrumb from '../src/index';

const App = () => (
  <Breadcrumb separator=" | ">
    <Breadcrumb.Item>
      <a href="/">Home</a>
    </Breadcrumb.Item>
    <Breadcrumb.Item>
      <a href="/">App Center</a>
    </Breadcrumb.Item>
    <Breadcrumb.Item>Application</Breadcrumb.Item>
  </Breadcrumb>
);

ReactDOM.render(<App />, document.getElementById('app'));
```

## API

| 参数      | 说明         | 类型              | 可选值 | 默认值 |
| --------- | ------------ | ----------------- | ------ | ------ |
| separator | 分隔符自定义 | String or Element |        | '/'    |

## Development

```js
yarn

yarn start
```

http://localhost:8080
