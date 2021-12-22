import Input from "./Input";
import Button from "./Button";
import TextArea from "./TextArea";
import { connect } from "react-redux";
import { editPost } from "../redux/reducers/postReducer";
import {
  changeCreator,
  changeImage,
  changeMessage,
  changeTags,
  changeTitle,
  clearForm,
} from "../redux/reducers/formReducer";
import { createPost } from "../redux/reducers/postReducer";
import FileBase64 from "react-file-base64";
const Form = ({
  title,
  image,
  message,
  creator,
  tags,
  edit,
  changeMessage,
  changeTitle,
  changeCreator,
  changeImage,
  changeTags,
  createPost,clearForm,editPost,editID
}) => {
  return (
    <form
      className="bg-gray-50 shadow-md rounded px-8 py-4 mb-4 max-w-sm space-y-4"
      onSubmit={(e) => {
        e.preventDefault();
        createPost({ creator, title, message,tags, image });
        clearForm();
      }}
    >
      <h2 className="text-center text-2xl font-bold tracking-wide text-purple-600 font-serif underline">{edit ? "Edit":"Create"} New Blog </h2>
      <Input type="Creator" val={creator} changeHandler={changeCreator} />
      <Input type="Title" val={title} changeHandler={changeTitle} />
      <TextArea val={message} changeHandler={changeMessage} />
      <Input type="Tags" val={tags} changeHandler={changeTags} />
      <FileBase64
        multiple={false}
        onDone={({ base64 }) => changeImage(base64)}
      />
      {!edit ? <Button name="SUBMIT" type="submit"/> : <Button name="EDIT" color="bg-lime-700" type="button" editPostBtn={()=>editPost(editID,{ title,
        image,
        message,
        creator,
        tags})}/>}
    </form>
  );
};
const mapStateToProps = (state) => {
  return {
    creator: state.formReducer.creator,
    image: state.formReducer.image,
    message: state.formReducer.message,
    tags: state.formReducer.tags,
    title: state.formReducer.title,
    edit: state.formReducer.edit,
    editID: state.formReducer.editID,
  };
};

const mapDispatchToProps = {
  changeMessage,
  changeTitle,
  changeCreator,
  changeImage,
  changeTags,
  createPost,
  clearForm,
  editPost,
};

export default connect(mapStateToProps, mapDispatchToProps)(Form);
