// 2.4 JSX 문법 연습

import React, { Fragment } from 'react';
import Hello from './Hello';
import './App.css';
import MyComponent from './MyComponent';
import Counter from './Counter';
import Say from './Say';

function App() {
  const name = '리액트';
  const nameError = undefined;
  const style = {
    backgroundColor: 'black',
    color: 'aqua',
    fontSize: 48, // 기본 단위 px
    fontWeight: 'bold', //
    padding: 16,
  };
  return (
    // 리액트 컴포넌트에서 요소 여러 개를 왜 하나의 요소로 꼭 감싸 주어야 할까요?
    // 그것은 Virtual DOM에서 컴포넌트 변화를 감지해 낼 때 효율적으로 비교할 수 있도록
    // 컴포넌트 내부는 하나의 DOM 트리 구조로 이루어져야 한다는 규칙이 있기 때문입니다
    <>
      <div
        style={{
          // background-color는 backgroundColor와 같이 -가 사라지고 카멜 표기법으로 작성됩니다.
          backgroundColor: 'black',
          color: 'gray',
          fontSize: '48px', // font-size -> fontSize
          fontWeight: 'bold', // font-weight -> fontWeight
          padding: 16, // 단위를 생략하면 px로 지정됩니다.
        }}
      >
        {name}
      </div>

      <div style={style}>{name} 안녕!</div>
      <h2>잘 작동하니?</h2>

      <p>========조건부 연산자=========</p>
      {name === '리액트' ? (
        <h1>조건부 연산자 : 리액트 입니다.</h1>
      ) : (
        <h2>조건부 연산자 : 리액트가 아닙니다.</h2>
      )}

      <p>========AND연산자를 사용한 조건부 렌더링========</p>
      <p>조건을 만족하지 않으면 아무것도 렌더링 하지 않는다.</p>
      <div>
        {name === '리액트' ? <h1>AND연산자 : 리액트 입니다.</h1> : null}
      </div>

      <p>========더 짧은 AND연산자 조건부 렌더링========</p>
      <div>
        {name === '리액트' && <h1>더 짧은 AND연산자 : 리액트 입니다.</h1>}
      </div>

      {nameError || '값이 undefined입니다.'}
      <div> {nameError || '리액트'} 입니다.</div>

      <Hello />

      <div className="react"> .react 적용 </div>
      <input></input>

      <MyComponent name={"주녕"} favoriteNumber={1}> 리액트</MyComponent>

      <Counter />

      <Say />
    </>
  );
}

export default App;
