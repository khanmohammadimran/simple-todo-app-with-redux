import React, { useState } from "react";
import notes from "../assets/images/notes.png";
import doubleTick from "../assets/images/double-tick.png";
import plusImage from "../assets/images/plus.png";
import { useDispatch } from "react-redux";
import { added, allComplete, clearCompleted } from "../redux/Todos/Action";

const Header = () => {
  const dispatch = useDispatch();
  const [input, setInput] = useState();
  const handleInput = (e) => {
    setInput(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(added(input));
    setInput("");
  };

  const completeHandler = () => {
    dispatch(allComplete());
  };
  const clearHandler = () => {
    dispatch(clearCompleted());
  };

  return (
    <div>
      <form
        onSubmit={handleSubmit}
        className="flex items-center bg-gray-100 px-4 py-4 rounded-md"
      >
        <img src={notes} className="w-6 h-6" alt="Add todo" />
        <input
          type="text"
          placeholder="Type your todo"
          className="w-full text-lg px-4 py-1 border-none outline-none bg-gray-100 text-gray-500"
          value={input}
          onChange={handleInput}
        />
        <button
          type="submit"
          className={`appearance-none w-8 h-8 bg-[url('${plusImage}')] bg-no-repeat bg-contain`}
        ></button>
      </form>

      <ul className="flex justify-between my-4 text-xs text-gray-500">
        <li className="flex space-x-1 cursor-pointer" onClick={completeHandler}>
          <img className="w-4 h-4" src={doubleTick} alt="Complete" />
          <span>Complete All Tasks</span>
        </li>
        <li className="cursor-pointer" onClick={clearHandler}>
          Clear completed
        </li>
      </ul>
    </div>
  );
};

export default Header;
