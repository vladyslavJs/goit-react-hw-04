import { useEffect, useState } from "react";
import { fetchImages } from "../../gallery-api";
import css from "./App.module.css";

import SearchBar from "../SearchBar/SearchBar";
import ImageGallery from "../ImageGallery/ImageGallery";
import LoadMoreBtn from "../LoadMoreBtn/LoadMoreBtn";
import ErrorMessage from "../ErrorMessage/ErrorMessage";
import Loader from "../Loader/Loader";
import ImageModal  from "../ImageModal/ImageModal";
import toast from 'react-hot-toast';

import { Toaster } from "react-hot-toast";



function App() {
  const [searchQuery, setSearchQuery] = useState("");
  const [images, setImages] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(false);
  const [page, setPage] = useState(1);
  const [showBtn, setShowBtn] = useState(false);

  const [isOpen, setIsOpen] = useState(false);
  const [content, setContent] = useState({});

  useEffect(() => {
    if (searchQuery === '') {
      return;
    }

    const getImages = async () => {
      try {
        // setIsLoading(true);
        // setError(false);
        const { imageData, totalPages } = await fetchImages(searchQuery, page);
        console.log(fetchImages);
        
        setImages((prevImages) => {
          return [...prevImages, ...imageData];
        }); //операція від попереднього, без перезаписування
        toast.success('Successfully!',{
          style: {
                    fontSize: '10px',
                    background: '#fff',
                    color: '#808080',
                    padding: '6px',
                    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
                    borderRadius: '4px',
                  },
                }); 
        setShowBtn(totalPages !== page && imageData.length > 0);
      } catch (error) {
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
    setImages([]);
    setError(false);
    setShowBtn(false);
  };

  const handleLoadMore = () => {
    setPage(page + 1);
    setIsLoading(true);
    setShowBtn(false);
  };

  const modalOpen = (value) => {
    setIsOpen(true);
    setContent(value);
  };

  const modalClose = () => {
    setIsOpen(false);
  };
  
  return (
    <div className={css.main}>
      < SearchBar query={searchQuery} onSubmit={handleSearch} />
      {images.length > 0 && (
          <ImageGallery gallery={images} onOpen={modalOpen} />
        )}
      {isLoading && <Loader/>}
      {error && <ErrorMessage  />}
      {showBtn && <LoadMoreBtn onClick={handleLoadMore} />}

      <ImageModal isOpen={isOpen} onClose={modalClose} content={content} />
      
      <Toaster
        position="top-left"
      />
 
    </div>
  )
}

export default App;

