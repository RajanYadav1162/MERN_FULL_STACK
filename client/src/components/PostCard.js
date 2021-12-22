import { deletePost,likePost, } from "../redux/reducers/postReducer";
import { connect } from "react-redux";
import {fillForm} from "../redux/reducers/formReducer";
const PostCard = ({ post, deletePost, likePost,fillForm }) => {
  const { title, creator, image, message, tags, createdAt, likes, _id } = post;
  return (
    <div className="card w-72">
      <div className="card-top relative">
        <img
          src={image}
          className="w-full h-32 brightness-50 absolute rounded-t-3xl shadow-lg"
          alt="random"
        />
        <div className="absolute top-content flex w-full px-3 my-3">
          <div className="left">
            <h1 className="text-slate-50 font-semibold text-sm font-serif">
              {creator}
            </h1>
            <p className="text-slate-400 text-xs font-bold tracking-normal">
              {createdAt.substring(0,10).split('-').reverse().join('-')}
            </p>
          </div>
          <div className="svg ml-auto hover:cursor-pointer" onClick={()=>fillForm({ title, creator, message, tags,editID:_id})}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6 text-slate-50 hover:w-10"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M5 12h.01M12 12h.01M19 12h.01M6 12a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0z"
              />
            </svg>
          </div>
        </div>
      </div>
      <div className="bottom-wrapper relative top-32">
        <div className="bottom w-full  absolute bg-slate-100 rounded-b-3xl shadow-xl h-[15rem] flex flex-col">
          <div className="tags flex">
            {tags.map((item, index) => (
              <h1
                className="py-3 px-1 text-xs text-slate-600 font-bold"
                key={index}
              >
                #{item}
              </h1>
            ))}
          </div>
          <h2 className="title mx-2.5 text-lg font-bold tracking-wide text-slate-800">
            {title}
          </h2>
          <p className="content text-gray-600 text-sm mx-2 leading-6 text-justify ">
            {message}
          </p>
          <div className="footer flex w-full px-2 py-4">
            <div className="like-container flex space-x-1 hover:cursor-pointer " onClick={()=>likePost(_id)}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5 text-lime-600"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path d="M2 10.5a1.5 1.5 0 113 0v6a1.5 1.5 0 01-3 0v-6zM6 10.333v5.43a2 2 0 001.106 1.79l.05.025A4 4 0 008.943 18h5.416a2 2 0 001.962-1.608l1.2-6A2 2 0 0015.56 8H12V4a2 2 0 00-2-2 1 1 0 00-1 1v.667a4 4 0 01-.8 2.4L6.8 7.933a4 4 0 00-.8 2.4z" />
              </svg>
              <p className="text-sm font-bold tracking-tight text-violet-700 hover:text-lg">
                Likes {likes}
              </p>
            </div>
            <div
              className="delete-container flex ml-auto space-x-1  hover:cursor-pointer"
              onClick={() => deletePost(_id)}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5 text-red-600"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fillRule="evenodd"
                  d="M9 2a1 1 0 00-.894.553L7.382 4H4a1 1 0 000 2v10a2 2 0 002 2h8a2 2 0 002-2V6a1 1 0 100-2h-3.382l-.724-1.447A1 1 0 0011 2H9zM7 8a1 1 0 012 0v6a1 1 0 11-2 0V8zm5-1a1 1 0 00-1 1v6a1 1 0 102 0V8a1 1 0 00-1-1z"
                  clipRule="evenodd"
                />
              </svg>
              <p className="text-sm font-bold tracking-tight text-rose-700 hover:text-lg">
                Delete
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
const mapDispatchToProps = {
  deletePost,
  likePost,
  fillForm
};

export default connect(null, mapDispatchToProps)(PostCard);
