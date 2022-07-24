import React, {useState} from "react";
import "./AddTask.css";
import {useDispatch} from "react-redux";
import {addTask} from "../../redux/Actions/Task";

const AddTask = () => {
  const dispatch = useDispatch();
  const [Taskvalue, setTaskvalue] = useState("");
  return (
    <div className="ADD">
      <h3>ADD Task</h3>
      <input onChange={(e) => setTaskvalue(e.target.value)} value={Taskvalue}  
      onKeyDown={e => e.key === 'Enter' }/>
      <button
        onClick={() => {
          if (Taskvalue) {
            dispatch(
              addTask({
                id: Math.random(),
                description: Taskvalue,
                isDone: false,
              })
            );
            setTaskvalue("");
          } else {
            alert("SORRY BUT You can't add an empty task !!");
          }
        }}
      >
        ADD
      </button>
    </div>
  );
};

export default AddTask;