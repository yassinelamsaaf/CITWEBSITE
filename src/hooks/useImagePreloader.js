import { useState, useEffect } from 'react';

const useImagePreloader = () => {
  const [imagesLoaded, setImagesLoaded] = useState(false);
  const [loadingProgress, setLoadingProgress] = useState(0);

  useEffect(() => {
    // Helper function to extract all image URLs from data
    const getAllImageUrls = () => {
      const imageUrls = [];
      
      // Add common images
      const commonImages = [
        './images/Logo CIT.png',
        './images/DataCamp.png',
        './images/web.png',
        './images/data.png',
        './images/DevOps.png',
        './images/design.png',
        './images/sec.png',
        './images/algor.png'
      ];
      
      // Add team images
      const teamImages = [
        './images/team/Ilyass.png',
        './images/team/Imane.png',
        './images/team/Farid.png',
        './images/team/Mouad.png',
        './images/team/Anas.png',
        './images/team/Hafsa.png',
        './images/team/Diaeeddine.png',
        './images/team/Maryam.png',
        './images/team/Douae.png',
        './images/team/Nissrine.png',
        './images/team/Najib.png',
        './images/team/Chakrone.png',
        './images/team/Bara.png',
        './images/team/Morad.png',
        './images/team/Yassine.png',
        './images/team/Amine.png',
        './images/team/Asmae.png',
        './images/team/Fajoui.png',
        './images/team/Anaddam.png',
        './images/team/Issam.png',
        './images/team/Mehdi.png',
        './images/team/Abderrahmane.png',
        './images/team/Abdelghafor.png',
        './images/team/Omar.png',
        './images/team/Taha.png'
      ];
      
      // Add event images
      const eventImages = [
        './images/events/IDEH.JPG',
        './images/events/IDEH.png',
        './images/events/IDEH1.JPG',
        './images/events/IDEH2.JPG',
        './images/events/ideh3.jpg',
        './images/events/jnjd.jpg',
        './images/events/JNJD1.JPG',
        './images/events/JNJD2.JPG',
        './images/events/jnjd3.jpg',
        './images/events/JNJD3.png',
        './images/events/jnjd4.jpg',
        './images/events/t2d.jpg'
      ];
      
      imageUrls.push(...commonImages, ...teamImages, ...eventImages);
      
      return imageUrls;
    };

    const imageUrls = getAllImageUrls();

    if (!imageUrls || imageUrls.length === 0) {
      setImagesLoaded(true);
      return;
    }

    let loadedCount = 0;
    const totalImages = imageUrls.length;

    const imagePromises = imageUrls.map((url) => {
      return new Promise((resolve, reject) => {
        const img = new Image();
        
        img.onload = () => {
          loadedCount++;
          setLoadingProgress((loadedCount / totalImages) * 100);
          resolve(url);
        };
        
        img.onerror = () => {
          loadedCount++;
          setLoadingProgress((loadedCount / totalImages) * 100);
          resolve(url); // Resolve anyway to not block loading
        };
        
        img.src = url;
      });
    });

    Promise.all(imagePromises).then(() => {
      // Add a small delay to ensure smooth transition
      setTimeout(() => {
        setImagesLoaded(true);
      }, 300);
    });

  }, []);

  return { 
    progress: loadingProgress, 
    isLoading: !imagesLoaded 
  };
};

export default useImagePreloader;
