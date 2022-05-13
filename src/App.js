import React, { useState } from "react";
import Card from "./Components/Card";
import "./index.css";
import Form from "./Components/Form";
import InputList from "./Components/Input/InputList";

function App() {
  const [array, setUsersList] = useState([]);

  const addUserHandler = () => {
    setUsersList((usersList) => {
      return [...usersList];
    });
  };

  return (
    <div className="container">
      <Card>
        <Form onAddUser={addUserHandler} array={array}></Form>
      </Card>
      {array.length > 0 && (
        <Card>
          <InputList input={array}></InputList>
        </Card>
      )}
    </div>
  );
}

export default App;
