export type ImageType = { url?: string; alt?: string };

export type ProjectFromClientType = {
  title: string;
  subtitle: string;
  description: string;
  phone: string;
  email: string;
  webUrl: string;
  imageUrl:string,
  imageAlt:string,
  missionMode: string;
  dueDate: string;
};


export type ProjectMapToModelType = {
  _id: string;
  title: string;
  subtitle: string;
  description: string;
  phone: string;
  email: string;
  webUrl: string;
  imageUrl:string,
  imageAlt:string,
  missionMode: string;
  dueDate: string;
  user_id: string;
  projectNumber: number;
};

export type NormalizedEditProject = {
  _id?: string;
  title: string;
  subtitle: string;
  description: string;
  phone: string;
  email: string;
  webUrl: string;
  imageUrl:string,
  imageAlt:string
  missionMode: string;
  dueDate: string;
  projectNumber: number;
  user_id: string;
};

export type CreateProjectErrors = Partial<ProjectFromClientType>;
