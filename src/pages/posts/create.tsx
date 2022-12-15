import { TextField } from "../../components/base/TextField";
import { PageHeader } from "../../components/Page/PageHeader";
import type { PageWithLayout } from "../../layouts";
import { DashboardLayout } from "../../layouts/Dashboard";

const CreatePostPage: PageWithLayout = () => {
  return (
    <>
      <PageHeader title="Create Post" backTo="/posts" />

      <form className="flex flex-col gap-6">
        <div className="flex w-full items-center gap-6">
          <TextField
            name="title"
            label="Title"
            placeholder="Awesome Post"
            containerClass="flex-[2]"
          />
          <TextField
            name="slug"
            label="Slug"
            placeholder="awesome-post"
            containerClass="flex-[1]"
          />
        </div>

        <TextField
          name="shortDescription"
          placeholder="This is the best post ever written..."
          label="Short Description"
        />

        <TextField
          name="content"
          placeholder="There once was a post..."
          label="Content"
        />

        <TextField
          name="keywords"
          placeholder="Post, Awesome, Communication"
          label="Keywords"
        />
      </form>
    </>
  );
};

CreatePostPage.Layout = DashboardLayout;

export default CreatePostPage;
