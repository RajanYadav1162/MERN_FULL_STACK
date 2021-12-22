import { connect } from "react-redux";
import {
  changeTags,
  changeTitle,
  changeMessage,
  changeImage,
  changeCreator,
} from "../redux/reducers/formReducer";

const Input = ({
  type,
  option = "text",
  border = true,
  val,
  changeHandler,
}) => {
  const onChangeHandler = (event) => {
    changeHandler(event.target.value);
  };
  return (
    <div>
      <label
        className="block text-gray-700 text-sm font-bold mb-2"
        htmlFor={type}
      >
        {type}
      </label>
      <input
        className={`${
          border ? "shadow" : "border-none"
        } appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline`}
        type={option}
        placeholder={`${type ==='Tags'? 'Tags(comma separated)':`${type}`}`}
        value={val}
        onChange={onChangeHandler}
      />
    </div>
  );
};

const mapDispatchToProps = {
  changeMessage,
  changeTitle,
  changeCreator,
  changeImage,
  changeTags,
};

export default connect(null, mapDispatchToProps)(Input);
