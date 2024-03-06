import { fetchImages } from "../../gallery-api";
import SearchBar from "../SearchBar/SearchBar";
import ImageGallery from "../ImageGallery/ImageGallery"
import ImageCard from "../ImageCard/ImageCard";
import ButtonLoadMore from "../ButtonLoadMore/ButtonLoadMore";
import ErrorMessage from "./ErrorMessage/ErrorMessage";

import toast, { Toaster } from 'react-hot-toast';
import { useEffect, useState } from "react";



function App() {
  const [images, setImages] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(false);
  const [page, setPage] = useState(1);
  const [searchQuery, setSearchQuery] = useState("");
  const [showBtn, setShowBtn] = useState(false);

  useEffect(() => {
  // HTTP запит не потрібно робити коли порожній імпут, тому робимо таку логіку. В результаті ми перевіряємо якийсь вираз   і якщо це try, то код знизу просто не виконується!
    if (searchQuery === '') {
      return;
    }

    const getImages = async () => {
      try {
        setIsLoading(true);
        // setError(false);
        const { imageData, totalPages } = await fetchImages(searchQuery, page);
        console.log(fetchImages);
        
        setImages((prevImages) => {
          return [...prevImages, ...imageData];
        }); //операція від попереднього, без перезаписування
        
        // toast.success('Successfully!')

        setShowBtn(totalPages !== page && imageData.length > 0);

      } catch (error) {
        console.log(error);
        setError(true);

      }
      finally {
        setIsLoading(false);
      }
    }
    getImages();
    }, [searchQuery, page])
  
  const handleSearch = (newQuery) => {
    setSearchQuery(newQuery);
    setPage(1);
    setImages([]); //так ми скидаємо масив даних, щоб почати пошук з порожньої інформації
  };

  const handleLoadMore = () => {
    setPage(page + 1);
    
  };  
  return (
    <div>
      < SearchBar onSubmit={handleSearch} />
      {images.length > 0 && <ImageGallery gallery={images} />}
      {error && <ErrorMessage  />}
      {showBtn && <ButtonLoadMore onClick={handleLoadMore}/>}
 
      
    </div>
  )
}

export default App;

