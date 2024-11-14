interface Props {
  children: String;
}

const Button = ({ children }: Props) => {
  return <button className="btn btn-primary">{children}</button>;
};
export default Button;
