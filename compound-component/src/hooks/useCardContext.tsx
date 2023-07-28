/**
 * @gogleset card component안에 접근하는지 검사
 */
import { useContext } from "react";
import { CardContext } from "../compoundComponents/Card";

const useCardContext = () => {
  const context = useContext(CardContext);
  console.log(context);

  // context의 값이 빈 객체이면 외부에서 접근한 객체이니 리턴
  if (Object.keys(context).length === 0)
    throw new Error("CardContext 내부에 위치해야 합니다.");

  return context;
};

export default useCardContext;
