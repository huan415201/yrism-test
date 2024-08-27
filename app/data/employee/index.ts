import { RAW_DATA } from './data';
import { DeleteEmployeeResponse, EmployeeListResponse } from './types';

export const getEmployeesAPI = async (
  pageNumber: number,
  pageSize: number,
  search: string,
) => {
  // Search
  let data = RAW_DATA.filter(i =>
    i.name.toLowerCase().includes(search.toLowerCase()),
  );
  // Pagination
  const startIndex = (pageNumber - 1) * pageSize;
  const endIndex = startIndex + pageSize;
  data = data.slice(startIndex, endIndex);

  const response = await new Promise<EmployeeListResponse>(resolve => {
    resolve({
      message: 'success',
      statusCode: 200,
      data: {
        totalItems: RAW_DATA.length,
        totalPages: Math.ceil(RAW_DATA.length / pageSize),
        pageItems: data,
      },
    });
  });
  return response.data;
};

export const deleteEmployeeAPI = async () => {
  const repsonse = await new Promise<DeleteEmployeeResponse>(resolve =>
    resolve({
      message: 'success',
      statusCode: 200,
    }),
  );
  return repsonse;
};

export * from './types';
