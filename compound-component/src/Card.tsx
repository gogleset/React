/**
 * @gogleset card component
 */
import Heading from "./Heading";
import CheckBox from "./CheckBox";
import { createContext, useState } from "react";

// context 생성, Card 컴포넌트 안 전역적인 value 접근
export const CardContext = createContext({});

const Card = ({ children }: { children: React.ReactNode }) => {
  // 전역적으로 접근 가능한 지역 state 만들기
  const [toggle, setToggle] = useState<boolean>(false);

  function CheckBoxChangeHandler(event: React.ChangeEvent<HTMLInputElement>) {
    console.log(event.target);
    setToggle(!toggle);
  }
  return (
    <CardContext.Provider value={{ toggle, setToggle }}>
      <div className='flex items-center mb-4'>
        <input
          id='default-checkbox'
          type='checkbox'
          value=''
          checked={toggle}
          onChange={CheckBoxChangeHandler}
          disabled={toggle}
          className='w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600'
        />
        <label
          htmlFor='default-checkbox'
          className='ml-2 text-sm font-medium text-gray-900 dark:text-gray-300'>
          모두 체크
        </label>
      </div>
      <div>{children}</div>
    </CardContext.Provider>
  );
};

Card.Heading = Heading;
Card.CheckBox = CheckBox;

export default Card;
