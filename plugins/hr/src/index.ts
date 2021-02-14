export interface IOptions {
  [key: string]: any;
}

export default function hr(root?: string, options?: IOptions | undefined) {
  console.log(root, options);
}
