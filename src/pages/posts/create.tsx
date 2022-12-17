import { SelectField } from "../../components/base/SelectField";
import { TextField } from "../../components/base/TextField";
import { Column, Form } from "../../components/forms";
import { Row } from "../../components/forms/Row";
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

      <Form onSubmit={handleSubmit(onSubmit)}>
        <Row>
          <Column grow={2}>
            <TextField
              label="Title"
              placeholder="Awesome Post"
              {...register("title")}
              error={errors?.title?.message}
            />
          </Column>

          <Column grow={1}>
            <TextField
              {...register("slug")}
              label="Slug"
              placeholder="awesome-post"
              error={errors?.slug?.message}
            />
          </Column>
        </Row>

        <Row>
          <Column grow={2}>
            <TextField
              {...register("keywords")}
              placeholder="Post, Awesome, Communication"
              label="Keywords"
              error={errors?.keywords?.message}
            />
          </Column>

          <Column grow={1}>
            <SelectField
              {...register("categoriesSlugs")}
              label="Category"
              options={[
                { label: "Community", value: "community" },
                { label: "Coding", value: "coding" },
              ]}
              error={errors?.categoriesSlugs?.message}
            />
          </Column>
        </Row>

        <Row>
          <TextField
            {...register("shortDescription")}
            placeholder="This is the best post ever written..."
            label="Short Description"
            error={errors?.shortDescription?.message}
          />
        </Row>

        <Row>
          <TextField
            {...register("content")}
            placeholder="There once was a post..."
            label="Content"
            error={errors?.content?.message}
          />
        </Row>
      </Form>
    </>
  );
};

CreatePostPage.Layout = DashboardLayout;

export default CreatePostPage;
