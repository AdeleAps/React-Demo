import styles from "../Styles/InputItem.module.css"

const InputItem = (props) => {
  return (
    <ul>
      <li>
        {props.name} ({props.age} years old)
      </li>
    </ul>
  );
};

export default InputItem;
