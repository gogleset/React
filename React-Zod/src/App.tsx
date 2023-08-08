import "./App.css";
import { useReducer } from "react";
import { UserType, processUser } from "./zodTypes/userType";

type ActionType = {
  type: "ADDRESS" | "PASSWORD" | "EMAIL" | "BIRTH";
  payload: string;
};

function reducer(state: UserType, action: ActionType): UserType {
  console.log(action);
  switch (action.type) {
    case "ADDRESS":
      return { ...state, address: action.payload };
    case "PASSWORD":
      return { ...state, password: action.payload };
    case "EMAIL":
      return { ...state, email: action.payload };
    case "BIRTH":
      return { ...state, birth: new Date(action.payload) };
    default:
      return state;
  }
}

function App() {
  const [state, dispatch] = useReducer(reducer, {
    address: "",
    password: "",
    email: "",
    birth: undefined,
  });

  const dispatchAddress = (event: React.ChangeEvent<HTMLInputElement>) => {
    event.preventDefault();
    dispatch({ type: "ADDRESS", payload: event.target.value });
  };

  const dispatchPassword = (event: React.ChangeEvent<HTMLInputElement>) => {
    event.preventDefault();
    dispatch({ type: "PASSWORD", payload: event.target.value });
  };
  const dispatchEmail = (event: React.ChangeEvent<HTMLInputElement>) => {
    event.preventDefault();
    dispatch({ type: "EMAIL", payload: event.target.value });
  };

  const dispatchBirth = (event: React.ChangeEvent<HTMLInputElement>) => {
    event.preventDefault();
    dispatch({
      type: "BIRTH",
      payload: new Date(event.target.value).toISOString(),
    });
  };

  const onClickHandler = (event: React.MouseEvent) => {
    event.preventDefault();
    try {
      // 유효성검사
      const result = processUser(state);
      console.log(result);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <>
      <h1>Zod APP</h1>
      <div>
        <label htmlFor='address'>Address</label>
        <input type='text' id='address' onChange={dispatchAddress} />
      </div>
      <div>
        <label htmlFor='password'>Password</label>
        <input type='text' id='password' onChange={dispatchPassword} />
      </div>
      <div>
        <label htmlFor='email'>Email</label>
        <input type='text' id='email' onChange={dispatchEmail} />
      </div>
      <div>
        <label htmlFor='birth'>Birth</label>
        <input type='date' id='birth' onChange={dispatchBirth} />
      </div>
      <div>
        <input type='button' value='눌러' onClick={onClickHandler} />
      </div>
    </>
  );
}

export default App;
