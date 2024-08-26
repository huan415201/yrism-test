import { DeleteEmployeeResponse, EmployeeListResponse } from './types';

export const getEmployees = async () => {
  const response = await new Promise<EmployeeListResponse>(resolve =>
    resolve({
      message: 'success',
      statusCode: 200,
      data: {
        totalItems: 1,
        totalPages: 1,
        pageItems: [
          {
            id: 1,
            name: 'Harry Kali',
            positions: [
              {
                id: 1,
                positionResourceId: 1,
                displayOrder: 2,
                toolLanguages: [
                  {
                    id: 1,
                    toolLanguageResourceId: 2,
                    displayOrder: 4,
                    from: 2018,
                    to: 2024,
                    description: 'New description here',
                    images: [
                      {
                        id: 1,
                        cdnUrl: '/cdn/image.jpg',
                        displayOrder: 0,
                      },
                      {
                        id: 2,
                        cdnUrl: '/cdn/image2.jpg',
                        displayOrder: 1,
                      },
                    ],
                  },
                ],
              },
            ],
          },
        ],
      },
    }),
  );
  return response.data;
};

export const deleteEmployee = async () => {
  const repsonse = await new Promise<DeleteEmployeeResponse>(resolve =>
    resolve({
      message: 'success',
      statusCode: 200,
    }),
  );
  return repsonse;
};

export * from './types';
