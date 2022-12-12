import type { PageWithLayout } from "../../layouts";
import { DashboardLayout } from "../../layouts/Dashboard";

const PostsPage: PageWithLayout = () => {
  return (
    <>
      <h1>Posts Page</h1>
    </>
  );
};

PostsPage.Layout = DashboardLayout;

export default PostsPage;
