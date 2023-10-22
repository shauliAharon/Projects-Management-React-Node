interface ProjectInterface {
  _id: string;
  title: string;
  subtitle: string;
  description: string;
  missionMode: string;
  dueDate: string;
  imageUrl:string,
  imageAlt:string,
  projectNumber: number;
  phone: string;
  email: string;
  user_id: string;
  createdAt: Date;
  likes: string[];
  webUrl: string;
}

export default ProjectInterface;
