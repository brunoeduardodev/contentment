import { PageHeader } from "../../components/Page/PageHeader";
import { PageTitle } from "../../components/Page/PageTitle";
import type { PageWithLayout } from "../../layouts";
import { DashboardLayout } from "../../layouts/Dashboard";

const PostsPage: PageWithLayout = () => {
  return (
    <>
      <PageHeader
        title="Posts"
        action={{ text: "Add Post", href: "/post/create" }}
      />
    </>
  );
};

PostsPage.Layout = DashboardLayout;

export default PostsPage;
