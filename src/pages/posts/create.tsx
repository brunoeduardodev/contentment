import { SelectField } from "../../components/base/SelectField";
import { TextField } from "../../components/base/TextField";
import { PageHeader } from "../../components/Page/PageHeader";
import { useZodForm } from "../../hooks/useZodForm";
import type { PageWithLayout } from "../../layouts";
import { DashboardLayout } from "../../layouts/Dashboard";
import type { CreatePostInput } from "../../server/schemas/createPost";
import { createPostSchema } from "../../server/schemas/createPost";

const CreatePostPage: PageWithLayout = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useZodForm({ schema: createPostSchema });

  const onSubmit = (data: CreatePostInput) => {
    console.log({ data });
  };

  return (
    <>
      <PageHeader title="Create Post" backTo="/posts" />

      <form className="flex flex-col gap-6" onSubmit={handleSubmit(onSubmit)}>
        <div className="flex w-full items-center gap-6">
          <TextField
            label="Title"
            placeholder="Awesome Post"
            containerClass="flex-[2]"
            {...register("title")}
            error={errors?.title?.message}
          />
          <TextField
            {...register("slug")}
            label="Slug"
            placeholder="awesome-post"
            containerClass="flex-[1]"
            error={errors?.slug?.message}
          />
        </div>

        <SelectField
          {...register("categoriesSlugs")}
          label="Category"
          options={[
            { label: "Community", value: "community" },
            { label: "Coding", value: "coding" },
          ]}
          error={errors?.categoriesSlugs?.message}
        />

        <TextField
          {...register("shortDescription")}
          placeholder="This is the best post ever written..."
          label="Short Description"
          error={errors?.shortDescription?.message}
        />

        <TextField
          {...register("content")}
          placeholder="There once was a post..."
          label="Content"
          error={errors?.content?.message}
        />

        <TextField
          {...register("keywords")}
          placeholder="Post, Awesome, Communication"
          label="Keywords"
          error={errors?.keywords?.message}
        />
      </form>
    </>
  );
};

CreatePostPage.Layout = DashboardLayout;

export default CreatePostPage;
