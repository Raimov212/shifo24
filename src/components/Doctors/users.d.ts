export type AllData = {
  [key: string]: string;
  status: string;
  role: string;
  active: string;
  email: string;
  firstName: string;
  lastName: string;
  id: number;
};

export type Data = {
  data: AllData[];
  itemsPerPage: number;
};

export type UserProps = {
  [key: string]: string[];
  statusFilter: string[] | null;
  roleFilter: string[] | null;
  activeFilter: string[] | null;
};
