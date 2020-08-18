export const fetchAllData = () => {
    return {
        "categories": [
            {
                "id": "jioyfaouiiuf",
                "name": "Transmission",
                "image": "default.png",
                "favorite": false
            }
        ],
        "products": [
            {
                "id" : "jakadffoiaji",
                "category_id": "jioyfaouiiuf",
                "name": "Automatic transmission",
                "favorite": false,
                "image": "default.png",
                "price" : 20
            },
            {
                "id" : "jakldjfodfafi",
                "category_id": "jioyfaouiiuf",
                "name": "Manual transmission",
                "favorite": false,
                "image": "default.png",
                "price" : 20
            }
        ]
    }
};

export const postAllData = () => {
    console.log("Post all Data")
};