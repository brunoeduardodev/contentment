import { PageHeader } from "../../components/Page/PageHeader";
import type { PageWithLayout } from "../../layouts";
import { DashboardLayout } from "../../layouts/Dashboard";

const PostsPage: PageWithLayout = () => {
  return (
    <>
      <PageHeader
        title="Posts"
        action={{ text: "Add Post", href: "/posts/create" }}
      />
    </>
  );
};

PostsPage.Layout = DashboardLayout;

export default PostsPage;
