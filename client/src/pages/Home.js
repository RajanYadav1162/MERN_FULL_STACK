import { connect } from "react-redux";
import PostCard from "../components/PostCard";

const Home = ({ posts }) => {
  return (
    <>
      {posts.map((post) => (
        <PostCard key={post._id} post={post} />
      ))}
    </>
  );
};
const mapStateToProps = (state) => {
  return {
    posts: state.postReducer,
  };
};

export default connect(mapStateToProps)(Home);
