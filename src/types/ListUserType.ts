import { AccountSchemaType } from "schemas";

export type ListUserType = {
  id?: string;
  name?: string;
  email?: string;
  password?: string;
  phone?: string;
  birthday?: string;
  avatar?: string;
  gender?: boolean;
  role?: string;
};


export type updatePayload ={
    path: string,
    data:AccountSchemaType
}