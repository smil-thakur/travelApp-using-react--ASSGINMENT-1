const Searchbar = ({ handleSearch }) => {


    return (
        <div className="searchContainer">
            <input onChange={(event) => handleSearch(event)} type="text" placeholder="search anything" />
        </div>
    )

}

export default Searchbar