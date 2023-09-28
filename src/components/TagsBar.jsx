import { useState } from "react"

const TagsBar = ({ tags, handleTagSelect, handleClearTag }) => {

    const [selectedTagIDX, setSelectedTagIDX] = useState(null)

    return (
        <>
            <div className="tagHintContainer">
                <div className="tagHint">
                    Select a place using a unique tag
                </div>
                <div onClick={() => { setSelectedTagIDX(null); handleClearTag() }} className="clearTag tagSelected">
                    Clear Tag
                </div>
            </div>

            <div className="tagContainer">
                {
                    tags.map((tag, index) => {
                        return (
                            <div onClick={() => { handleTagSelect(tag); setSelectedTagIDX(index); }} key={index} className={selectedTagIDX === index ? "tagSelected" : "tag"}>
                                {tag}
                            </div>
                        )
                    })
                }
            </div>
        </>
    )
}

export default TagsBar