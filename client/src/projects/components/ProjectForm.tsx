import React, { FC, ChangeEvent } from "react";
import Form from "../../forms/components/Form";
import Input from "../../forms/components/Input";
import Joi from "joi";
import {
  ProjectFromClientType,
  CreateProjectErrors,
} from "../models/types/projectTypes";

type Props = {
  title?: string;
  onSubmit: () => void;
  onReset: () => void;
  onFormChange: () => Joi.ValidationError | null;
  errors: CreateProjectErrors;
  data: ProjectFromClientType;
  onInputChange: (e: ChangeEvent<HTMLInputElement>) => void;
};
const ProjectForm: FC<Props> = ({
  onSubmit,
  onReset,
  onFormChange,
  title,
  errors,
  data,
  onInputChange,
}) => {
  return (
    <Form
      onSubmit={onSubmit}
      onReset={onReset}
      onFormChange={onFormChange}
      styles={{ maxWidth: "800px" }}
      title={title}
      spacing={1}
    >
      <Input
        name="title"
        label="title"
        error={errors.title}
        onInputChange={onInputChange}
        data={data}
        breakPoints={{ sm: 6 }}
      />
      <Input
        name="subtitle"
        label="subtitle"
        error={errors.subtitle}
        onInputChange={onInputChange}
        data={data}
        breakPoints={{ sm: 6 }}
      />
      <Input
        name="phone"
        label="phone"
        type="phone"
        error={errors.phone}
        onInputChange={onInputChange}
        data={data}
        breakPoints={{ sm: 6 }}
      />
      <Input
        name="email"
        label="email"
        type="email"
        error={errors.email}
        onInputChange={onInputChange}
        data={data}
        breakPoints={{ sm: 6 }}
      />
      <Input
        name="webUrl"
        label="webUrl"
        error={errors.webUrl}
        onInputChange={onInputChange}
        data={data}
        breakPoints={{ sm: 6 }}
        required={false}
      />
      <Input
        name="imageUrl"
        label="image url"
        error={errors.imageUrl}
        onInputChange={onInputChange}
        data={data}
        breakPoints={{ sm: 6 }}
        required={false}
      />
      <Input
        name="imageAlt"
        label="image alt"
        error={errors.imageAlt}
        onInputChange={onInputChange}
        data={data}
        breakPoints={{ sm: 6 }}
        required={false}
      />
      <Input
        name="dueDate"
        label="dueDate (02-02-2023)"
        error={errors.dueDate}
        onInputChange={onInputChange}
        data={data}
        breakPoints={{ sm: 6 }}
      />
      <Input
        name="missionMode"
        label="mission Mode"
        error={errors.missionMode}
        onInputChange={onInputChange}
        data={data}
        breakPoints={{ sm: 12 }}
      />

      <Input
        name="description"
        label="description"
        error={errors.description}
        onInputChange={onInputChange}
        data={data}
        breakPoints={{ sm: 12 }}
        multiline={true}
      />
    </Form>
  );
};

export default React.memo(ProjectForm);
