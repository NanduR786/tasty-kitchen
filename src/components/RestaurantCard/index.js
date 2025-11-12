import './index.css'

const RestaurantCard = (props) => {
    const {restaurantDetails} = props
    const {imageUrl, name, cuisine,rating, totalReviews} = restaurantDetails
    return(
        <div className="restaurant-card-container">
            <img src={imageUrl} alt={name}/>
            <div className="restaurant-info-container">
                <h1>{name}</h1>
                <p>{cuisine}</p>
                <p>* <b>{rating}</b> ({totalReviews} reviews)</p>
            </div>
        </div>
    )
}

export default RestaurantCard
