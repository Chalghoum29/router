import React, { useState } from 'react'
import Modal from 'react-modal';
import { Link } from 'react-router-dom';
import StarRating from './StarRating';

const customStyles = {
  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)',
  },
};


Modal.setAppElement('#root');
export const MovieAdd = ({add}) => {
    const [modalIsOpen, setIsOpen] = React.useState(false);
    const [title, setTitle] = useState('');
    const [rating, setRating] = useState('1')
    const [image, setImage] = useState('')

    function openModal() {
      setIsOpen(true);
    }
    function closeModal() {
        setIsOpen(false);
      }
      const handleSubmit = (e)=>{
          e.preventDefault();
          const newMovie ={
              id:Math.random(),
              title,
              rating,
              image,
          }
          add(newMovie)
      }

      // handle the rating
      const handleRating=(x)=>setRating(x)
    return (
        <div>
          <Link to="/">Home</Link>
           <button onClick={openModal}>Add movie</button>
      <Modal
        isOpen={modalIsOpen}
        
        onRequestClose={closeModal}
        style={customStyles}
        contentLabel="Example Modal"
        >
            <form onSubmit={handleSubmit}  >
            <label>Title</label>
                <input type="text" value={title} onChange={(e)=>setTitle(e.target.value)} />
                <label>Rating</label>
               <StarRating handleRating= {handleRating} rating={rating} />
                <label>poster</label>
                <input  type="url" value={image}  onChange={(e)=>setImage(e.target.value)}/>
                <div>
                <button type='submit'>Confirm</button>
                <button>Cancel</button>
                </div>

            </form>
            </Modal> 
        </div>
    )
}
