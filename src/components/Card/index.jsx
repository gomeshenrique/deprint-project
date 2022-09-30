import { CardStyle } from "./style"

export const Card = ({ title, imgUrl }) => {
    return(
        <CardStyle imgUrl={imgUrl}>
            <div>
                <p>{ title }</p>
            </div>
        </CardStyle>
    )
}