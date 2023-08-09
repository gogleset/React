import { useRef } from "react";
import { JoinUserType, processJoinUser } from "../types/joinUserType";

const JoinUser = () => {
  const inputIdRef = useRef<HTMLInputElement>(null);
  const inputPasswordRef = useRef<HTMLInputElement>(null);
  const inputEmailRef = useRef<HTMLInputElement>(null);
  const inputNameRef = useRef<HTMLInputElement>(null);
  const inputBirthRef = useRef<HTMLInputElement>(null);

  function onClickHandler(event: React.MouseEvent) {
    event.preventDefault();
    const value: JoinUserType = {
      id: inputIdRef.current!.value,
      password: inputPasswordRef.current!.value,
      email: inputEmailRef.current!.value,
      name: inputNameRef.current!.value,
      birth: new Date(inputBirthRef.current!.value).toISOString(),
    };
    console.log(typeof value.birth);
    const result = processJoinUser(value);
    console.log(result);
    if (!result.success) {
      // handle error then return
      console.log(result.error.errors[0].message);
    } else {
      console.log(result.data);
    }
  }

  return (
    <>
      <div>
        <label htmlFor='id'>ID</label>
        <input type='text' id='id' ref={inputIdRef} defaultValue={""} />
      </div>
      <div>
        <label htmlFor='password'>Password</label>
        <input
          type='password'
          id='password'
          ref={inputPasswordRef}
          defaultValue={""}
        />
      </div>
      <div>
        <label htmlFor='email'>Email</label>
        <input type='email' id='email' ref={inputEmailRef} defaultValue={""} />
      </div>
      <div>
        <label htmlFor='name'>Name</label>
        <input type='text' id='name' ref={inputNameRef} defaultValue={""} />
      </div>
      <div>
        <label htmlFor='birth'>Birth</label>
        <input type='date' id='birth' ref={inputBirthRef} defaultValue={""} />
      </div>
      <div>
        <button type='button' onClick={onClickHandler}>
          눌러
        </button>
      </div>
    </>
  );
};

export default JoinUser;
