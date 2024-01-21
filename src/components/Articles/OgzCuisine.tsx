interface Props {
  children: React.ReactNode;
}
const OgzCuisine = ({ children }: Props) => {
  return <article className="prose">{children}</article>;
};

export default OgzCuisine;
