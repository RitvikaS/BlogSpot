export interface Author {
  name: string;
  role: string;
  href: string;
  imageUrl: string;
}

export interface Category {
  title: string;
  href: string;
}

export interface Comment {
  name: string;
  email: string;
  date: string;
  comment: string;
}

export interface Blog {
  _id: number;
  title: string;
  heading: string;
  route: string;
  description: string;
  date: string;
  dateTime: string;
  category: Category;
  image: string;
  author: Author;
  content: string;
  commentSection: Comment[];
}
