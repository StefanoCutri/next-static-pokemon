import { Spacer, Text, useTheme } from "@nextui-org/react";
import NextLink from "next/link";
import Image from "next/image";
import Link from "next/link";

export const Navbar = () => {
  const { theme } = useTheme();

  return (
    <div
      style={{
        display: "flex",
        width: "100%",
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "start",
        padding: "0 20px",
        backgroundColor: theme?.colors.gray900.value,
      }}
    >
      <NextLink href="/" passHref legacyBehavior>
        <a style={{ display: "flex" }}>
          <Image
            src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/132.png"
            alt="App icon"
            width={70}
            height={70}
          />
        </a>
      </NextLink>
      <NextLink href="/" passHref legacyBehavior>
        <a style={{ display: "flex" }}>
          <Text color="white" h3>
            Pókemon
          </Text>
        </a>
      </NextLink>

      <Spacer css={{ flex: 1 }} />
      <NextLink href="/favourites" passHref legacyBehavior>
        <a style={{ display: "flex" }}>
          <Text color="white">Favourites</Text>
        </a>
      </NextLink>
    </div>
  );
};
