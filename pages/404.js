import Link from "next/link";

export default function Page404() {
  return (
    <>
      <h1>Página não encontrada :0</h1>
      <Link href="/" passHref>
        <a>Ir para a home</a>
      </Link>
    </>
  );
}
