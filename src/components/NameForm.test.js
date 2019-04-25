import React from 'react';
import { shallow } from 'enzyme';
import NameForm from './NameForm';

describe('NameForm', () => {
  let component = null;

  let changed = null;
  const onInsert = (name) => {
    changed = name;
  };

  // 메소드 바인딩
  it('renders correctly', () => {
    component = shallow(<NameForm onInsert={onInsert} />);
  });

  it('matches snapshot', () => {
    expect(component).toMatchSnapshot();
  });

  // DOM 시뮬레이트
  describe('insert new text', () => {
      // form 엘리먼트 확인
      it('has a form', () => {
          expect(component.find('form').exists()).toBe(true);
      });
      // input 엘리먼트 확인
      it('has an input', () => {
          expect(component.find('input').exists()).toBe(true);
      });
      // input에 hello 값 입력
      it('simulates input change', () => {
          const mockedEvent = {
              target: {
                  value: 'hello'
              }
          };
          // 이벤트를 시뮬레이트 합니다. 두번째 파라메터는 이벤트 객체 입니다.
          component.find('input').simulate('change', mockedEvent);
          expect(component.state().name).toBe('hello');
      });
      // submit 버튼 클릭
      it('simulate form submit', () => {
          const mockedEvent = {
              // onSubmit 에서 preventDefault 를 호출하게 되므로, 가짜 함수 추가
              preventDefault: () => null 
          };
          component.find('form').simulate('submit', mockedEvent);
          // submit을 하면 input값을 공배으로 전환
          expect(component.state().name).toBe('');
          expect(changed).toBe('hello');
      })
  })
});