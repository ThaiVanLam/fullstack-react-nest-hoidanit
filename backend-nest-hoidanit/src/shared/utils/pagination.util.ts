import { PaginationMeta, PaginationQuery } from '../types/pagination.type';

export function buildPaginationMeta(
  query: PaginationQuery,
  total: number,
): PaginationMeta {
  const page = query.page ?? 1;
  const limit = Math.min(query.limit ?? 10, 100);
  return {
    page,
    limit,
    total,
    totalPages: Math.ceil(total / limit),
  };
}

export function buildPaginationOptions(query: PaginationQuery): {
  skip: number;
  take: number;
} {
  const page = query.page ?? 1;
  const limit = Math.min(query.limit ?? 10, 100);
  return { skip: (page - 1) * limit, take: limit };
}
