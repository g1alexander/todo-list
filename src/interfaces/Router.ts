export interface Router {
  name: string;
  component(): void;
  children: Children[];
}
interface Children {
  path: string;
  name: string;
  component(): void;
}
