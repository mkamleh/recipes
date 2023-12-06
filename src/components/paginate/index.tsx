import type { FC, ReactElement } from "react";
import { Pagination } from "react-bootstrap";
import { type IPaginateProps } from "../../interfaces/paginate.interface";
import "./index.css";

const Paginate: FC<IPaginateProps> = ({
  currentPage,
  totalPages = 0,
  handleChange,
}) => {
  const paginationItems: ReactElement[] = [];

  const firstPage: number = 1;
  const lastPage: number = totalPages;

  const delta: number = 2;

  paginationItems.push(
    <Pagination.First
      key="first"
      onClick={() => handleChange(firstPage)}
      disabled={currentPage === firstPage}
    />,

    <Pagination.Prev
      key="prev"
      onClick={() => handleChange(currentPage - 1)}
      disabled={currentPage === firstPage}
    />
  );

  const addPageItem = (page: number) => {
    paginationItems.push(
      <Pagination.Item
        key={page}
        active={page === currentPage}
        onClick={() => handleChange(page)}
      >
        {page}
      </Pagination.Item>
    );
  };

  for (let i = firstPage; i <= lastPage; i++) {
    if (
      i === firstPage ||
      i === lastPage ||
      (i >= currentPage - delta && i <= currentPage + delta)
    ) {
      addPageItem(i);
    } else if (i === currentPage - delta - 1 || i === currentPage + delta + 1) {
      paginationItems.push(<Pagination.Ellipsis key={i} />);
    }
  }

  paginationItems.push(
    <Pagination.Next
      key="next"
      onClick={() => handleChange(currentPage + 1)}
      disabled={currentPage === lastPage}
    />,
    <Pagination.Last
      key="last"
      onClick={() => handleChange(lastPage)}
      disabled={currentPage === lastPage}
    />
  );

  return <Pagination>{paginationItems}</Pagination>;
};

export default Paginate;
