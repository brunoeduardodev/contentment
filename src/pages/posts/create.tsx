import { PageHeader } from "../../components/Page/PageHeader";
import type { PageWithLayout } from "../../layouts";
import { DashboardLayout } from "../../layouts/Dashboard";

const CreatePostPage: PageWithLayout = () => {
  return (
    <>
      <PageHeader title="Create Post" />
    </>
  );
};

CreatePostPage.Layout = DashboardLayout;

export default CreatePostPage;
