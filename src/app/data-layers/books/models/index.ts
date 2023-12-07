export interface Book {
  name: string,
  url: string,
  cover?: string,
  description?: string,
  likedBy: string[],
  creator: string,
  id: string
}

export interface BookQueryParams {
  name?: string;
  limit?: number;
  creator?: string;
}
