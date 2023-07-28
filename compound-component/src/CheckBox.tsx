  /**
   * @gogleset CheckBox component
   */
  import React, { useState, useEffect } from "react";
  import useCardContext from "./hooks/useCardContext";

  const CheckBox: React.FC<{ labelName: string }> = ({ labelName }) => {
    const { toggle, setToggle }: any = useCardContext(); //모두 체크 변수 접근
    const [checked, setChecked] = useState<boolean>(false); // 컴포넌트 지역변수

    useEffect(() => {
      // 모두 check되지 않으면 모두 check off
      if (!checked) {
        setToggle(false);
      }
    }, [checked]);

    // toggle 감지해서
    useEffect(() => {
      // 데이터 check on
      toggle && setChecked(true);
    }, [toggle]);
    function CheckBoxChangeHandler(event: React.ChangeEvent<HTMLInputElement>) {
      console.log(event.target);
      setChecked(!checked);
    }

    return (
      <div className='flex items-center mb-4'>
        <input
          id='default-checkbox'
          type='checkbox'
          checked={checked}
          onChange={CheckBoxChangeHandler}
          value=''
          className='w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600'
        />
        <label
          htmlFor='default-checkbox'
          className='ml-2 text-sm font-medium text-gray-900 dark:text-gray-300'>
          {labelName}
        </label>
      </div>
    );
  };

  export default CheckBox;
