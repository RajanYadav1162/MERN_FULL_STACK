import {connect} from "react-redux";
import {clearForm} from "../redux/reducers/formReducer";
const Button = ({ name, color='bg-rose-500',editPostBtn,type,clearForm }) => {
  return <button type={type} onClick={()=>{
  if(editPostBtn){
    editPostBtn();
    clearForm();
  }
  else {
    return ''
  }
  }
  } className={`${color} 'bg-rose-500 w-full py-2 rounded-xl text-medium text-gray-100 font-semibold tracking-wide shadow hover:bg-rose-400 focus:ring focus:ring-rose-800'`}>{name}</button>;
};
const mapDispatchToProps = {
  clearForm
}
export default connect(null, mapDispatchToProps)(Button);
