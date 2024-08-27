import { Employee } from '../../../../data';

export type EmployeeItemProps = {
  item: Employee;
  index: number;
  onDelete: (itemId: number, name: string) => void;
};
