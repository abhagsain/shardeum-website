import { Flex, HStack, Link, Text } from "@chakra-ui/react";
import NextLink from "next/link";

const navigationItems = [
  { title: "Community", href: "/" },
  { title: "Whitepaper", href: "/" },
  { title: "Learn", href: "/" },
  { title: "Blog", href: "/" },
  { title: "Language", href: "/" },
];

const Navbar = () => {
  return (
    <Flex
      justifyContent="space-between"
      py="5"
      direction={{ base: "column", lg: "row" }}
    >
      <NextLink href="/">
        <Text
          as="a"
          href="/"
          fontSize="2xl"
          fontWeight="semibold"
          textAlign={{ base: "center", lg: "left" }}
        >
          Shardeum
        </Text>
      </NextLink>
      <HStack
        wrap="wrap"
        spacing={"10"}
        shouldWrapChildren
        display={{ base: "none", lg: "flex" }}
      >
        {navigationItems.map((navItem) => (
          <NextLink href={navItem.href} key={navItem.title} passHref>
            <Link fontSize={{ base: "sm", lg: "base" }} fontWeight="semibold">
              {navItem.title}
            </Link>
          </NextLink>
        ))}
      </HStack>
    </Flex>
  );
};

export default Navbar;
