// 3.4.1 클래스형 컴포넌트 state

import React, { Component } from 'react';

class Counter extends Component {
  // 컴포넌트에 state를 설정할 때는 다음과 같이 constructor 메서드를 작성하여 설정해야한다.
  // 클래스형 컴포넌트에서 constructor를 작성할 때는 반드시 super(props)를 호출해야 한다.
  // 이 함수가 호출되면 현재 클래스형 컴포넌트가 상속하고 있는 리액트의 Component 클래스가 지닌 생성자 함수를 호출해준다.

  // state의 초기값을 지정하기 위해 contructor메소드를 선언했지만, 다른 방식으로 state의 초기값을 설정할 수 있다.
//   constructor(props) {
//     super(props);

//     // state의 초기값 설정하기
//     this.state = {
//       number: 0,
//       fixedNumber: 0,f

// 다른 방식으로 state의 초기값 설정 
// constructor 메서드를 선언하지 않고도 state의 초기값을 설정할 수 있다.
    state = {
        number : 0,
        fixedNumber : 0
    };

  render() {
    const { number, fixedNumber } = this.state; // 현재 state를 조회할 때는 this.state로 조회한다.

    return (
      <div>
        <h1>{number}</h1>
        <h2>바뀌지 않는 값 : {fixedNumber}</h2>
        <button
          // button에 onClick이라는 값을 props로 넣어주고, 이는 버튼이 클릭될 때 호출시킬 함수를 설정할 수 있게 해준다. ==> 이벤트 설정
          // 이벤트로 설정함 할수를 넣을 땐 화살표 함수 문법을 사용해야 한다.
          onClick={() => {
            // this.setState를 사용하여 state에 새로운 값을 넣을 수 있다.
            // this.setState({ number: number + 1 });

            // onClick에 설정한 함수 내부에서 this.setState를 두 번 호출하려면
            // this.setSate를 사용할 때 객체 대신에 함수를 인자로 넣어주면 된다.
            
            //prevState = 기존 상태, props = 현재 지니고 있는 props(업데이트 과정에 필요하지 않다면 생략 가능)
            this.setState({
              number: number + 1,
              fixedNumber: fixedNumber - 1
            },
            () => {

              // setState를 사용하여 값을 업데이트하고 난 다음 특정 작업을 하고 싶을 때는 setState의 
              // 두 번째 파라미터로 콜백(callnack)함수를 등록하여 작업을 처리할 수 있다.
             console.log('방금 setState가 호출되었습니다.');
             console.log(this.state) 
            }
            );
          }}
        >
          +1
        </button>
      </div>
    );
  }
}

export default Counter;
