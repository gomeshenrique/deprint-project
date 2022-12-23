import { CardStyle } from "./style"

export const Card = ({ description, title, imgUrl }) => {
    return (
        <CardStyle imgUrl={imgUrl}>
            <div className="card">
                <div className="card-shadow">
                    <div className="card-details">
                        <p className="text-title">{title}</p>
                        <p className="text-body">{description}</p>
                    </div>
                </div>
                <button className="card-button">More info</button>
            </div>
        </CardStyle>
    )
}