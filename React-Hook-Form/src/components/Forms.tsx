import React from "react";
import { useForm } from "react-hook-form";

const Form = () => {
  /**
   * register: 등록
   * handleSubmit: submit 이벤트시 핸들링할 함수.
   * formState: form 양식이 현재 어떤 상태인지
   *  */
  const {
    register,
    handleSubmit,
    formState: { isSubmitting, errors },
  } = useForm();
  console.log(isSubmitting, errors);

  return (
    <form
      onSubmit={handleSubmit(async (data) => {
        await new Promise((r) => setTimeout(r, 1000));
        alert(JSON.stringify(data));
      })}>
      <label htmlFor='email'>이메일</label>
      <input
        id='email'
        type='email'
        placeholder='test@email.com'
        {...register("email", {
          pattern: {
            value: /\S+@\S+\.\S+/,
            message: "이메일 형식에 맞지 않습니다.",
          },
        })}
      />
      <label htmlFor='password'>비밀번호</label>
      <input
        id='password'
        type='password'
        placeholder='****************'
        {...register("password")}
      />
      <button type='submit' disabled={isSubmitting}>
        로그인
      </button>
    </form>
  );
};

export default Form;
