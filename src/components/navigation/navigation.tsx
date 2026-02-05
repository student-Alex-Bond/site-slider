import { type FC } from "react";
import "./navigation.css";
import { useMediaQuery } from "react-responsive";
import { DesktopMenu } from "./desktop-menu/desktop-menu";
import { BurgerMenu } from "./burger-menu/burger-menu";
export const Navigation: FC = () => {
  const isMobile = useMediaQuery({ query: "(max-width: 476px)" });
  return <>{isMobile ? <BurgerMenu /> : <DesktopMenu />}</>;
};
