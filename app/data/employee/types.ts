export type EmployeeListResponse = {
  message: string;
  statusCode: number;
  data: {
    totalItems: number;
    totalPages: number;
    pageItems: Employee[];
  };
};

export type Employee = {
  id: number;
  name: string;
  title: string;
  yoe: number;
  description: string;
  positions: Position[];
};

export type Position = {
  id: number;
  positionResourceId: number;
  displayOrder: number;
  toolLanguages: ToolLanguage[];
};

export type ToolLanguage = {
  id: number;
  toolLanguageResourceId: number;
  displayOrder: number;
  from: number;
  to: number;
  description: string;
  images: Image[];
};

export type Image = {
  id: number;
  cdnUrl: string;
  displayOrder: number;
};

export type DeleteEmployeeResponse = {
  message: string;
  statusCode: number;
};
