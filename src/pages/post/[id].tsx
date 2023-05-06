import { useRouter } from "next/router";
import React from "react";

const PostDetailsPage = () => {
  const route = useRouter();
  console.log(route);

  return <div>PostDetailsPage</div>;
};

export default PostDetailsPage;
