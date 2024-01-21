interface Props {
  children: React.ReactNode;
}
const BotMahir = ({ children }: Props) => {
  return <article className="prose">{children}</article>;
};

export default BotMahir;
