import { Form } from "../../components/Form";
import { Input } from "../../components/Form/Input";
import { PageHeader } from "../../components/Page/PageHeader";
import type { PageWithLayout } from "../../layouts";
import { DashboardLayout } from "../../layouts/Dashboard";
import { createPostSchema } from "../../server/schemas/createPost";

const CreatePostPage: PageWithLayout = () => {
  return (
    <>
      <PageHeader title="Create Post" backTo="/posts" />
      <Form schema={createPostSchema} onSubmit={console.log}>
        <Input name="titles" placeholder="Post Title" label="Title" />
        <Input name="slug" placeholder="post-title" label="Slug" />
      </Form>
    </>
  );
};

CreatePostPage.Layout = DashboardLayout;

export default CreatePostPage;
