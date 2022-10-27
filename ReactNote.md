# Note

~ Note ~

● ES6의 const와 let.

- var : scope(해당 값을 사용할 수 있는 코드 영역)가 함수 단위
- let, consts : scope가 함수 단위가 아닌 블록 단위.
- ES6에서 var를 사용할 일은 없다. 기본적으로 const를 사용하고, 해당 값을 바꿔야 할 때는 let을 사용한다.

● if문 대신 조건부 연산자

- JSX 내부의 자바스크립트 표현식에서 if 문을 사용할 수는 없다.
- 조건에 따라 다른 내용을 렌더링 할 때는 JSX 밖에서 if 문을 사용하여 사전에 값을 설정하거나,
  { } 안에 조건부 연산자를 사용하면 된다. ==> 삼항 연산자

● JSX는 주로 여러 줄로 작성할 때는 괄호로 감싸고, 한 줄로 표현할수 있는 JSX는 감싸지 않는다.

- JSX는 태그들을 반드시 닫아줘야 한다. <input>, <br>같은 태그들도 닫아줘야한다. </input>, <br />
- 태그 사이에 별도의 내용이 들어가지 않는 경우에는 <input />처럼 "self-closing"을 해서 태그의 선언과 동시에 닫는다.

● 화살표 함수와 function 함수 (일반 함수)

- 일반 함수는 자신이 종속된 객체를 this로 가리키며, 화살표 함수는 자신이 종속된 인스턴스를 가리킨다.

- 화살표 함수는 값을 연산하여 바로 반환해야 할 때 사용하면 가독성을 높일 수 있다.

    function twice(value) {
    return value \* 2;
    }

    const triple = (value) => value \* 3;

이렇게 따로 { }를 열어 주지 않으면 연산한 값을 그대로 반환한다는 의미입니다.

● props (properties)

- 컴포넌트의 속성을 설정할 때 사용하는 요소
- 해당 컴포넌트를 불러와 사용하는 부모 컴포넌트(현 상황에선 App 컴포넌트가 부모 컴포넌트)에서 설정할 수 있다.
- props 값을 설정하지 않은 경우 기본적으로 나오게 되는 defaultProps가 있다.

● PropTypes의 종류
• array: 배열
• arrayOf(다른 PropType): 특정 PropType으로 이루어진 배열을 의미합니다. 예를 들어 arrayOf(PropTypes.number)는 숫자로 이루어진 배열입니다.
• bool: true 혹은 false 값
• func: 함수
• number: 숫자
• object: 객체
• string: 문자열
• symbol: ES6의 Symbol
• node: 렌더링할 수 있는 모든 것(숫자, 문자열, 혹은 JSX 코드. children도 node PropType입니다.)
• instanceOf(클래스): 특정 클래스의 인스턴스(예: instanceOf(MyClass))
• oneOf(['dog', 'cat']): 주어진 배열 요소 중 값 하나
• oneOfType([React.PropTypes.string, PropTypes.number]): 주어진 배열 안의 종류 중 하나
• objectOf(React.PropTypes.number): 객체의 모든 키 값이 인자로 주어진 PropType인 객체
• shape({ name: PropTypes.string, num: PropTypes.number }): 주어진 스키마를 가진 객체
• any: 아무 종류 

● state 

- 컴포넌트 내부에서 바뀔 수 있는 값. props는 컴포넌트가 사용되는 과정에서 부모 컴포넌트가 설정하는 값이며,
컴포넌트 자신은 해당 props를 읽기 전용으로만 사용할 수 있다. 

- props를 바꾸려면 부모 컴포넌트에서 바꿔야 한다.

- 두 가지 종류의 state가 있다. 1) 클래스형 컴포넌트 : state , 2) 함수형 컴포넌트 : useState

● 3.4.2 함수형 컴포넌트에서 useState 사용하기

- 리액트 16.8 이전 버전은 함수형 컴포넌트에서 state를 사용할 수 없었다. 
- 하지만 useState라는 함수를 사용하여 함수형 컴포넌트에서도 state를 사용할 수 있게 되었다.

● 배열 비구조화 할당

- 배열 비구조화 할당 : 배열 안에 들어있는 값을 쉽게 추출할 수 있도록 해 주는 문법.

const array = [1, 2];                              const array = [1, 2];
const one = array[0];           ==>              
const two = array[1];                              const [one, two] = array;

● props와 state의 비슷한 점 : 둘 다 컴포넌트에서 사용하거나 렌더링할 데이터를 담고 있으므로 비슷해 보일 수 있다.
- prop : 부모 컴포넌트가 설정
- state 컴포넌트 자체적으로 지닌 값으로 컴포넌트 내부에서 값을 얻데이트 할 수 있다.

* props이 무조건 값이 고정적이지는 않다. 부모 컴포넌트의 state를 자식 컴포넌트의 props로 전달하고,
자식 컴포넌트에서 특정 이벤트가 발생할 때 부모 컴포넌트의 메서드를 호출하면 props도 유동적으로 사용할 수 있습니다.

4. 이벤트 핸들링

4.1.1 이벤트 사용 시 주의 사항

1) 이벤트 이름은 카멜 표기법
- onclick ==> onClick, onkeyup ==> onKeyUp

2) 이벤트에 실행할 자바스크립트 코드를 전달하는 것이 아니라, 함수 형태의 값을 전달
- HTML에서 이벤트를 설정할 때는 큰따옴표 안에 실행할 코드를 넣었지만, 리액트에서는 함수 형태의 객체를 전달합니다. ㄹㄹ
  앞서 버튼 예제에서도 화살표 함수 문법으로 함수를 만들어 전달했지요? 이렇게 바로 만들어서 전달해도 되고,
  렌더링 부분 외부에 미리 만들어서 전달해도 됩니다. 

3) DOM 요소에만 이벤트를 설정할 수 있습니다.
- div, button, input, form, span 등의 DOM 요소에는 이벤트 설정 가능, 하지만 직접 만든 컴포넌트에는 이벤트를 자체적으로 설정 불가능.
예를 들어 다음과 같이 MyComponent에 onClick 값을 설정한다면 MyComponent를 클릭할 때 doSomething 함수를 실행하는 것이 아니라, 
그냥 이름이 onClick인 props를 MyComponent에게 전달해 줄 뿐입니다.

<MyComponent onClick={doSomething}/>
따라서 컴포넌트에 자체적으로 이벤트를 설정할 수는 없습니다. 하지만 전달받은 props를 컴포넌트 내부의 DOM 이벤트로 설정할 수는 있죠.

<div onClick={this.props.onClick}>
    { /* (…) */ }
</div>

● 이벤트 종류 
• Clipboard • Composition • Keyboard • Focus • Form • Mouse • Selection • Touch • UI • Wheel• Media • Image • Animation • Transition 