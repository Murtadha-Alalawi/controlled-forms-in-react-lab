import { useState } from 'react';


function Bookshelf(){

const [books, setBooks] = useState([
    { title: 'Fourth Wing', author: 'Rebecca Yarros' },
    { title: 'The Lion, the Witch and the Wardrobe', author: 'C.S. Lewis' },
  ]);

  const [newbooks, setNewBooks]= useState({
    title:'',
    author:'',
})

function handleChange(event){
    setNewBooks({...newbooks,[event.target.name]:event.target.value})

}

function handleSubmit(event){event.preventDefault()

    setBooks([...books, newbooks])

    setNewBooks({
        title:'',
        author:''
    })
}

return(

<div className="bookshelfDiv">
  <div className="formDiv">
    <h3>Add a Book</h3>
    
    <form onSubmit={handleSubmit}>
        <label htmlFor="title">Title:</label>
        <input 
        onChange={handleChange}
        type='text'
        id='title'
        name='title'
        value={newbooks.title} />

<label htmlFor="author">Author:</label>
        <input 
        onChange={handleChange}
        type='text'
        id='author'
        name='author'
        value={newbooks.author} />

        <button type='submit'>Submit</button>
    </form>

  </div>
  <div className="bookCardsDiv">
    {books.map((book,index)=>(
        <div key={index} className='bookCard'>
            <h4>{book.title}</h4>
            <p>{book.author}</p>
        </div>
    ))}
  </div>
</div>
)
}
export default Bookshelf;