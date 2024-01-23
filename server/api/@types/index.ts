export type UserEntity = {
  id: string;
  name: string;
};

export type TaskEntity = {
  id: string;
  label: string;
  done: boolean;
  createdTime: number;
  image: { url: string; s3Key: string } | undefined;
  author: { userId: string; name: string };
};
