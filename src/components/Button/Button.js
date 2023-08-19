import { LoadMoreButtonStuled } from "./Button.styled"

export const Button = ({onClick}) => {
    return (
        <LoadMoreButtonStuled type="button" onClick={onClick}>Load more</LoadMoreButtonStuled>
    )
}