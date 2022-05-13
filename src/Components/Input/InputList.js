import InputItem from "./InputItem";

const InputList = (props) => {

  return (
    <div>
      {props.input.map((item, index) => (
        <InputItem name={item.enteredName} age={item.enteredAge} key={index}>
          {props.children}
        </InputItem>
      ))}
    </div>
  );
};

export default InputList;
