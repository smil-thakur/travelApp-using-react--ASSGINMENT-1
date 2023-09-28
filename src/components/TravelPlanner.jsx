import Place from "./Place"

const TravelPlanner = ({ places }) => {

    return (
        <div className="mainContainer">
            {
                places.map((place, index) => {
                    return (
                        <div key={index}>
                            <Place destinationName={place.destinationName} desc={place.desc} imageURL={place.imageURL} />
                            <div className="divider"></div>
                        </div>
                    )
                })
            }
        </div>
    )


}

export default TravelPlanner