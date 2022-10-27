// 3.4.2.2 useState 사용하기 ~ 4. 이벤트 핸들링
// 배열 비구조화 할당 문법을 사용한다.
import React, { useState } from 'react';

// 클래스형 컴포넌트든 함수형 컴포넌트든 state를 사용할 때는 주의해야 하는 사항이있다.
// state 값을 바꿔야 할 때는 setState 혹은 useState를 통해 전달받은 세터 함수를 사용해야 한다.


// 잘못된 코드 예시 

// 클래스형 컴포넌트에서…
// this.state.number = this.state.number + 1;
// this.state.array = this.array.push(2);
// this.state.object.value = 5;


// 함수형 컴포넌트에서…
// const [object, setObject] = useState({ a: 1, b: 1 });
// object.b = 2;

// 배열, 객체를 업데이트해야 할 때는 배열이나 객체 사본을 만들고 그 사본에 값을 업데이트 후, 
// 그 사본의 상태를 setState 혹은 세터 함수를 통해 업데이트 한다.

// 사본을 만들어서 업데이트 하기

// 객체 다루기
// const object = { a : 1, b : 2, c : 3};
// const nextObject = {...object, b : 2}; // 사본을 만들어서 b 값만 덮어 쓰기

// const array = [
//     {id : 1, value : true},
//     {id : 2, value : true},
//     {id : 3, value : false},
// ]

// let nextArray = array.concat({id : 4}); // 새 항목 추가
// nextArray.filter(item => item.id !==2); // id가 2인 항목 제거
// nextArray.map(item => 
//     (   
//         // id가 1인 항목의 value를 false로 설정해준다.
//         item.id === 1 ? { ...item, value : false} : item )); 

const Say = () => {
  const [message, setMessage] = useState();
  const onClickEnter = () => setMessage('안녕하세요!');
  const onClickLEave = () => setMessage('안녕히 가세요!');

  const [color, setColor] = useState('pink');

  return (
    <div>
      <button onClick={onClickEnter}>입장</button>
      <button onClick={onClickLEave}>퇴장</button>
      <h1 style={{ color }}>{message}</h1>
      <button style={{ color: 'red' }} onClick={() => setColor('red')}>
        빨간색
      </button>

      <button style={{ color: 'green' }} onClick={() => setColor('green')}>
        초록색
      </button>

      <button style={{ color: 'blue' }} onClick={() => setColor('blue')}>
        파란색
      </button>
    </div>
  );
};

export default Say;
