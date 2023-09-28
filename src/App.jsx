import { useEffect, useState } from "react";
import Searchbar from "./components/SearchBar"
import TravelPlanner from "./components/TravelPlanner"
import TagsBar from "./components/TagsBar";
const App = () => {


    //mock data of places
    //this containes tag used for conditional rendering
    const placeData = [
        {
            destinationName: "Paris",
            tags: ["romantic", "art", "fashion", "culture", "cafe culture"],
            desc: "Paris, France's capital, is a major European city and a global center for art, fashion, gastronomy and culture. Its 19th-century cityscape is crisscrossed by wide boulevards and the River Seine. Beyond such landmarks as the Eiffel Tower and the 12th-century, Gothic Notre-Dame cathedral, the city is known for its cafe culture and designer boutiques along the Rue du Faubourg Saint-Honoré.",
            imageURL: "https://lh5.googleusercontent.com/proxy/yDz8CQdvZLGcxYqZrGDAtyfWEbF0iNq-MGs-l4fNj7XpMOKKX0PsKis5j_yUn3g1a_N1WdBntNeoH4ibCXvIV07HDWT3EpBmQy85YCYEhbCsxYPjzXK4xKVMOG2uXTC1Wv5ZRgL-y1ASyUKM0bIW55PHFwfVyw=w1080-h624-n-k-no"
        },
        {
            destinationName: "New York City",
            tags: ["skyline", "Statue of Liberty", "Times Square", "Central Park", "finance", "culture", "entertainment"],
            desc: "New York City is the largest city in the United States and one of the world's major global cities. The city is known for its iconic skyline, which includes landmarks like the Statue of Liberty, Times Square, and Central Park. It's a hub for finance, culture, and entertainment.",
            imageURL: "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b9/Above_Gotham.jpg/1920px-Above_Gotham.jpg"
        },
        {
            destinationName: "Tokyo",
            tags: ["ultramodern", "traditional", "anime", "temples", "vibrant food scene", "fashion"],
            desc: "Tokyo, Japan's bustling capital, mixes the ultramodern and the traditional, from neon-lit skyscrapers and anime shops to cherry trees and temples. The opulent Meiji Shinto Shrine is known for its towering gate and surrounding forests. The Imperial Palace sits amid sprawling public gardens. The city is famed for its vibrant food scene, and its Shibuya and Harajuku districts are the heart of its trendy teen fashion scene.",
            imageURL: "https://lh5.googleusercontent.com/proxy/0diPJjN9qaBKIKjeTUrLa0xZe_U54nyoPCCgX06VT_jXy4aA2Dpxw4uBxvDXdAxQl5cR_rY3ehxQXpggIiusgS-IgDnR6KxuspMjsNH1ybaz7ioWvtwZZH_4OCZ8oQpeaGf5_VRMyR8pbeDTAev1qIePUCD6Vw=w548-h318-n-k-no"
        },
        {
            destinationName: "London",
            tags: ["history", "culture", "Tower of London", "Buckingham Palace", "theater", "parks"],
            desc: "London is the capital of England and the United Kingdom. It is a diverse and vibrant city with a rich history and culture. Visitors can explore iconic landmarks such as the Tower of London, Buckingham Palace, and the British Museum. London is also known for its theater scene in the West End and its beautiful parks like Hyde Park.",
            imageURL: "https://encrypted-tbn0.gstatic.com/licensed-image?q=tbn:ANd9GcRKGNvbSD-ISpevkkdQKovDQY8hpgRSanRn2gCjNeQSybVkQZTQd7Z20dDw2xs7QNixOjidKR4uAN0VSMuCAUnc9M4xrfNf"
        },
        {
            destinationName: "Sydney",
            tags: ["harbor", "beaches", "cosmopolitan culture", "natural beauty"],
            desc: "Sydney, Australia's largest city, is known for its stunning harbor, iconic landmarks such as the Sydney Opera House and Sydney Harbour Bridge, and beautiful beaches like Bondi Beach. The city offers a mix of cosmopolitan culture and natural beauty, making it a popular destination for travelers.",
            imageURL: "https://lh5.googleusercontent.com/p/AF1QipMHftgSCBlvyjxYphi4gLqDC_62WWvZvyy1EBuh=w1080-h624-n-k-no"
        },
        {
            destinationName: "Rome",
            tags: ["ancient ruins", "Colosseum", "Roman Forum", "art and architecture", "Vatican City", "Italian cuisine"],
            desc: "Rome, the capital of Italy, is a city steeped in history and culture. It is known for its ancient ruins, including the Colosseum and the Roman Forum, as well as its stunning art and architecture. Visitors can explore the Vatican City, home to St. Peter's Basilica and the Sistine Chapel, and indulge in delicious Italian cuisine.",
            imageURL: "https://lh5.googleusercontent.com/p/AF1QipO0jDqEA4d2y-H9bcfOJ3NgTPhpbdFNFdwB3eZu=w1080-h624-n-k-no"
        },
    ];


    //const use state values

    const [places, setPlaces] = useState(placeData)

    const [tags, setTags] = useState([])



    //extracting all the tags
    useEffect(() => {

        let placeTags = []

        placeData.forEach((place) => {
            placeTags = [...place.tags, ...placeTags]
        })

        setTags(placeTags)

    }, [])


    //handling search, searches place name, description and from tag
    const handleSearch = (event) => {

        const key = event.target.value.toLowerCase()

        if (key === "") {
            setPlaces(placeData)
        }
        else {
            const searchPlaces = placeData.filter((place) => {
                return (place.destinationName.toLowerCase().includes(key) || place.desc.toLowerCase().includes(key) || place.tags.includes(key))
            })

            setPlaces(searchPlaces)
        }

    }

    //select place with appropriate tag
    const handleTagSelect = (tag) => {
        console.log(tag)

        const placesWithTag = placeData.filter((place) => {
            return place.tags.includes(tag)
        })

        setPlaces(placesWithTag)
    }


    //clear tag selection
    const handleClearTag = () => {
        setPlaces(placeData)
    }


    //returing all the main components
    return (
        <>
            <h1 className="heading">React TravelPlanner App</h1>
            <Searchbar handleSearch={handleSearch} />
            <TagsBar tags={tags} handleTagSelect={handleTagSelect} handleClearTag={handleClearTag} />
            <TravelPlanner places={places} />
        </>
    )

}

export default App