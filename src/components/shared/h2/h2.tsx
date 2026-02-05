import type { FC, ReactNode } from "react";
import './h2.css'

export const H2: FC<{children: ReactNode}> = ({children}) => {
  return <h2 className="h2-title">{children}</h2>;
};
