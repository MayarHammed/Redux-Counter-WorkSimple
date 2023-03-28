import React from "react";
import './App.css'
import { useDispatch, useSelector } from "react-redux";
import {
  INCREMENT,
  DECREMENT,
  RESET,
  isEditLogIn,
  isEditLogOut,
} from "./Store/Type";

function App() {
  // get data state  from reducer
  const DataCounter = useSelector((state) => state.counter.counter);
  const DataIsEdit = useSelector((state) => state.Auth.isEdit);
  // dispatch action
  const dispatch = useDispatch();
  // handel dispatch
  const IncrementCounter = () => {
    dispatch({ type: INCREMENT });
  };
  const DecrementCounter = () => {
    dispatch({ type: DECREMENT });
  };
  const ResetCounter = () => {
    dispatch({ type: RESET });
  };
  const isEditLogOutCounter = () => {
    dispatch({ type: isEditLogOut });
  };
  const isEditLogInCounter = () => {
    dispatch({ type: isEditLogIn });
  };
  return (
    <div className="app">
      <p class="content">
        <div class="counter">
          <h1>Counter </h1>
          {DataIsEdit === true ? (
            <h2>
            <div class="counter-box" id="count">{DataCounter}</div>
            <button class="increment-btn button" onClick={() => IncrementCounter()}>INCREMENT</button>
            <button class="increment-btn2 button" onClick={() => DecrementCounter()}>DECREMENT</button>
            <button class="increment-btn3 button" onClick={() => ResetCounter()}>Reset</button>
            <button className="isLogIn" onClick={() => isEditLogOutCounter()}>LogOut</button>
            </h2>
          ) : (
            <h3>
              <button className="isLogIn1" onClick={() => isEditLogInCounter()}>LogIn</button>
            </h3>
          )}
        </div>
        
      </p>

      <h1>
     
      </h1>
    </div>
  );
}

export default App;
