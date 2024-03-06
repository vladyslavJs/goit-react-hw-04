import axios from "axios";
 
const YOUR_ACCESS_KEY = "sjc6e5i-iph5NLgxRC1wYvQNB7Qv3PLt1oMzhCIMpKI";

export const fetchImages = async (searchQuery, page) => {
    
    axios.defaults.baseURL = "https://api.unsplash.com";

    const response = await axios.get("/search/photos", {
        params: {
            query: searchQuery,
            client_id: YOUR_ACCESS_KEY,
            per_page: 12,
            page,
            orientation: 'landscape',
        },
    });
    return {
        imageData: response.data.results,
        totalPages: response.data.total_pages,
    };   
};

console.log(axios);