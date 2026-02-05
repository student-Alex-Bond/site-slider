import type { FC } from "react"
import { SiteTitle } from "../shared/site-title/site-title"
import { Navigation } from "../navigation/navigation"

export const MobileApp:FC = () => {
    return (
        <>
        <SiteTitle/>
        <Navigation/>
        </>
    )
}