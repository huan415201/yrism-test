import { useEffect, useState } from 'react';
import { Employee, getEmployeesAPI } from '../../data';

const useGetEmployeeList = () => {
  const [employees, setEmployees] = useState<Employee[]>([]);
  const [nextPage, setNextPage] = useState(1);
  const [pageSize, setPageSize] = useState(10);
  const [search, setSearch] = useState('');
  const [maxPage, setMaxPage] = useState(9999);
  const [loading, setLoading] = useState(false);

  const loadData = async (
    pn: number,
    ps: number,
    s: string,
    onlyCurrentPage: boolean,
  ) => {
    if (pn > maxPage) return;
    setLoading(true);
    const response = await getEmployeesAPI(pn, ps, s);
    setLoading(false);
    setMaxPage(response.totalPages);
    setEmployees(prev => {
      if (pn === 1 || onlyCurrentPage) return response.pageItems;
      return [...prev, ...response.pageItems];
    });
    setNextPage(pn + 1);
  };

  const reloadData = () => loadData(1, pageSize, search, false);

  const loadMore = () => {
    loadData(nextPage, pageSize, search, false);
  };

  const getNextPage = () => loadData(nextPage, pageSize, search, true);

  const getPreviousPage = () => loadData(nextPage - 2, pageSize, search, true);

  const deleteEmployee = (id: number) =>
    setEmployees(prev => prev.filter(i => i.id !== id));

  useEffect(() => {
    reloadData();
  }, [pageSize, search]);

  return {
    employees,
    loadMore,
    deleteEmployee,
    getNextPage,
    getPreviousPage,
    nextPage,
    maxPage,
    loading,
    search,
    setSearch,
  };
};

export default useGetEmployeeList;
