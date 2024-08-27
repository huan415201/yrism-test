import { useEffect, useState } from 'react';
import { Employee, getEmployeesAPI } from '../../data';

const useGetEmployeeList = () => {
  const [employees, setEmployees] = useState<Employee[]>([]);
  const [pageNumber, setPageNumber] = useState(1);
  const [pageSize, setPageSize] = useState(10);
  const [search, setSearch] = useState('');

  const loadData = async (pn: number, ps: number, s: string) => {
    if (pn === -1) return;
    const response = await getEmployeesAPI(pn, ps, s);
    setEmployees(prev => {
      if (pn === 1) return response.pageItems;
      return [...prev, ...response.pageItems];
    });
    if (pn === response.totalPages) setPageNumber(-1); // Last page
    else setPageNumber(prev => prev + 1);
  };

  const reloadData = () => loadData(1, pageSize, search);

  const loadMore = () => {
    loadData(pageNumber, pageSize, search);
  };

  useEffect(() => {
    reloadData();
  }, [pageSize, search]);

  return { employees, loadMore, pageSize, setPageSize, search, setSearch };
};

export default useGetEmployeeList;
