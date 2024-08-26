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
    if (response.totalPages === pn) setPageNumber(-1); // Last page
    setEmployees(prev => [...prev, ...response.pageItems]);
  };

  const reloadData = () => loadData(1, pageSize, search);

  const loadMore = () => loadData(pageNumber, pageSize, search);

  useEffect(() => {
    reloadData();
  }, [pageSize, search]);

  return { employees, loadMore, pageSize, setPageSize, search, setSearch };
};

export default useGetEmployeeList;
