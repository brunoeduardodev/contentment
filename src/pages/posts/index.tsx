import { PageTitle } from "../../components/Page/PageTitle";
import type { PageWithLayout } from "../../layouts";
import { DashboardLayout } from "../../layouts/Dashboard";

const PostsPage: PageWithLayout = () => {
  return (
    <>
      <PageTitle>Posts</PageTitle>
    </>
  );
};

PostsPage.Layout = DashboardLayout;

export default PostsPage;
