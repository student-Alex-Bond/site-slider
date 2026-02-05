import type { FC, ReactNode } from "react";
import './paragraph.css'
export const Paragraph:FC<{children: ReactNode}> = ({children}) => {
    return (
        <p className="paragraph">{children}</p>
    )
}