export interface IPaginateProps {
  currentPage: number;
  totalPages: number;
  handleChange: (pageNumber: number) => void;
}
