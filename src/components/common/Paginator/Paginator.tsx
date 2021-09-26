import React from "react";
import s from "./Paginator.module.css"


type PropsType = {
    currentPage: number
    totalUserCount: number
    pageSize: number
    onPageChanged:(p:number)=>void
}

function Paginator(props: PropsType) {
    let pagesCount = Math.ceil(props.totalUserCount / props.pageSize)
    let pages = [];
    for (let i = 1; i <= pagesCount; i++) {
        pages.push(i)
    }
    return (
        <div>
            {pages.map(p => {
                // @ts-ignore
                return <span className={props.currentPage === p && s.selectedPage}
                             onClick={(e) => {
                                 props.onPageChanged(p)
                             }}
                >{p}</span>
            })}
        </div>
    )

}


export default Paginator;