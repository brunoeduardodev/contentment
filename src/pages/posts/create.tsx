import { TextField } from "../../components/base/TextField";
import { PageHeader } from "../../components/Page/PageHeader";
import type { PageWithLayout } from "../../layouts";
import { DashboardLayout } from "../../layouts/Dashboard";

const CreatePostPage: PageWithLayout = () => {
  return (
    <>
      <PageHeader title="Create Post" backTo="/posts" />

      <form className="flex flex-col gap-6">
        <TextField name="title" label="Title" placeholder="Awesome Post" />
      </form>
    </>
  );
};

CreatePostPage.Layout = DashboardLayout;

export default CreatePostPage;
