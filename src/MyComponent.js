// 3.1 클래스형 컴포넌트
import React, { Component } from 'react';

// 컴포넌트의 필수 props를 지정하거나 props의 타입(type)을 지정할 때는 propTypes를 사용합니다.
// 컴포넌트의 propTypes를 지정하는 방법은 defaultProp을 설정하는 것과 비슷합니다.
// 우선 propTypes를 사용하려면 코드 상단에 import 구문을 사용하여 불러와야 합니다.
import PropTypes from 'prop-types';

// 비구조화 할당 문법을 사용해서 내부 값을 바로 추출한다. (구조 분해 문법)
// 객체에서 값을 추출하는 문법이다.
// 함수의 파라미터 부분에서도 사용할 수 있다. 만약 함수의 파라미터가 객체라면 그 값을 바로
// 비구조화해서 사용한다 .
// const MyComponent = ({ name, favoriteNumber ,children }) => {
//     // const { name, children } = props;
//   return (
//     <div>
//       안녕하세요, 제 이름은 {name} 입니다. <br />
//       children 값은 {children}
//       입니다.
//       <br />
//       제가 제일 좋아하는 숫자는 {favoriteNumber} 입니다.
//     </div>
//   );
// };

// MyComponent를 클래스형 컴포넌트로 생성하는 법
class MyComponent extends Component {
//클래스형 컴포넌트에서 defaultProps와 protoTypes를 class 내부에서 지정하는 방법

static defaultProps = {
    name : '디폴트 프로퍼티 이름'
};

static propTypes = {
    name : PropTypes.string,
    favoriteNumber : PropTypes.number.isRequired
};

  render() {
    // 비구조화 할당
    const { name, favoriteNumber, children } = this.props; // 비구조화 할당.
    return (
      <div>
        안녕하세요, 제 이름은 {name}입니다. <br />
        children 값은 {children}
        입니다.
        <br />
        제가좋아하는 숫자는 {favoriteNumber}입니다.
      </div>
    );
  }
}

// defaultProps와 propTypes는 꼭 사용해야 할까?
// 컴포넌트의 필수 사항이 아니므로 꼭 사용할 필요는 없지만, 큰 규모의 프로젝트를 진행할 때, 
// 특히 다른 개발자들과 협업한다면 해당 컴포넌트에 어떤 props가 필요한지 쉽게 알 수 있어 개발 능률이 좋아질 것이다.

// MyComponent.defaultProps = {
//   name: '디폴트 프로퍼티',
// };

// // name값은 무조건 문자열 형태로 전달해야 된다는 것을 의미한다.
// MyComponent.propTypes = {
//   name: PropTypes.string,

//   // isRequired를 사용하여 필수 propTypes를 설정한다.
//   favoriteNumber: PropTypes.number.isRequired,
// };

//이 코드는 다른 파일에서 이 파일을 import할 때, 위에서 선언한 MyComponent 클래스를 불러오도록 설정합니다.
export default MyComponent;
