import React from 'react'
import Form from "./components/Form";
import { useEffect } from "react";
import { connect } from "react-redux";
import { getPosts } from "./redux/reducers/postReducer";
import Home from "./pages/Home";
function App({ getPosts }) {
  useEffect(() => {
    getPosts();
  }, [getPosts]);

  return (
    <div className="container bg-gray-100 pb-96 w-screen overflow-x-hidden">
      <div className="text-center text-3xl font-bold tracking-wide italic text-rose-600 p-4 mb-4 shadow shadow-red-200">
        BLOGIFY
      </div>
      <div className=" grid md:grid-cols-3 gap-5">
        <div className=" col-span-2">
          <div className="post-wrapper w-full h-full flex flex-wrap justify-center  gap-y-[25rem] gap-x-20  ">
            <Home />
          </div>
        </div>
        <div className="col-span-1">
          <Form />
        </div>
      </div>
    </div>
  );
}
const mapDispatchToProps = {
  getPosts,
};
export default connect(null, mapDispatchToProps)(App);
