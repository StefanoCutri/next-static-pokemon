import Head from "next/head";

type Props = {
  children: React.ReactNode;
  title: string;
};

export const Layout = ({ children, title }: Props) => {
  return (
    <>
      <Head>
        <title>{title || "Pokemon App"}</title>
        <meta name="author" content="Stefano Cutri" />
        <meta name="description" content="Pokemon info - xxx" />
        <meta name="keywords" content="xxx, pokemon, pokedex" />
      </Head>
      <main>{children}</main>
    </>
  );
};
