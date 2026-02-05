import type { FC, ReactNode } from "react"
import './h3.css'

export const H3:FC<{children: ReactNode}> = ({children}) => {
    return(
        <h3 className="subtitle">{children}</h3>
    )
}