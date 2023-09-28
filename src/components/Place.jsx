const Place = ({ destinationName, desc, imageURL }) => {

    return (
        <div className="placeContainer">
            <h1>{destinationName}</h1>
            <div className="imageDescContainer">
                <div className="imageContainer">
                    <img src={imageURL}></img>
                </div>
                <p>{desc}</p>
            </div>
        </div>
    )

}

export default Place