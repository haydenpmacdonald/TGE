import React, { useState } from 'react';
import ImageGrid from '../components/ImageGrid';
import Modal from '../components/Modal';
import NavBar from '../components/NavBar';
import GalleryHeader from '../components/GalleryHeader';
import Footer from '../components/Footer';

function Projects() {
  const [selectedImg, setSelectedImg] = useState(null);

  return (
    <div>
      <NavBar />
      <div className="App">
        <GalleryHeader />
        <ImageGrid setSelectedImg={setSelectedImg} />
        { selectedImg && (
          <Modal selectedImg={selectedImg} setSelectedImg={setSelectedImg} />
        )}
      </div>
      <Footer />
    </div>
  );
}

export default Projects;

