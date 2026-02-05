import type { FC } from "react"
import './unordered-list.css'


type UnorderedListTypeProps = { dataList: Array<string>}
export const UnorderedList:FC<UnorderedListTypeProps> =({dataList})=>{
    return (
        <ul className="skills">
            {dataList.map((item, index)=>{
                return(
                    <li className="skills-item" key={index}>{item}</li>
                )
            })}
        </ul>
    )
}