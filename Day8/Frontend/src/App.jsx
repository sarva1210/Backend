import { useState, useEffect } from 'react'
import axios from "axios"

const BASE_URL = import.meta.env.VITE_API_URL

function App() {
  const [notes, setNotes] = useState([
    // {
    //   title:"test title",
    //   description:"test description"
    // },
    // {
    //   title:"test title",
    //   description:"test description"
    // }
  ])

  console.log("hello integration")

  // function fetchNotes(){
  //   axios.get(`${BASE_URL}/api/notes`)
  //     .then((res)=>{
  //       setNotes(res.data.notes)
  //   })
  // }

  function fetchNotes() {
  axios.get(`${BASE_URL}/api/notes`)
    .then(res => {
      if (Array.isArray(res.data)) {
        setNotes(res.data)
      } else if (Array.isArray(res.data.notes)) {
        setNotes(res.data.notes)
      } else {
        setNotes([])
      }
    })
    .catch(err => {
      console.error(err)
      setNotes([])
    })
  }



  useEffect(()=>{
    fetchNotes()
  },[])

  function handleSubmit(e){
    e.preventDefault()

    const {title, description} = e.target.elements

    console.log(title.value, description.value)

    axios.post(`${BASE_URL}/api/notes`,{
      title:title.value,
      description:description.value
    })
    .then(res=>{
      console.log(res.data)

      fetchNotes()
    })
  }

  function handleDeleteNote(noteId){
    axios.delete(`${BASE_URL}/api/notes/${noteId}`)
    .then(res=>{
      console.log(res.data)
      fetchNotes()
    })
  }

  function handleUpdateNote(noteId, newDescription) {
    axios.patch(`${BASE_URL}/api/notes/${noteId}`, {
    description: newDescription
  })
  .then(res => {
    console.log(res.data)
    fetchNotes()
  })
}


  return (
    <>
    <form className='note-create-form' onSubmit={handleSubmit}>
      <input name='title' type="text" placeholder='Enter title'/>
      <input name='description' type="text" placeholder='Enter description'/>
      <button>Create Note</button>
    </form>
    <div className="notes">
      {
        notes.map(note =>{
          return <div className="note">
            <h1>{note.title}</h1>
            <p>{note.description}</p>
            <button className='btn' onClick={()=>{ 
              const newDesc = prompt("Enter new description", note.description)
              if(newDesc){handleUpdateNote(note._id, newDesc)}
            }} >Edit</button>
            <button className='btn' onClick={()=>{handleDeleteNote(note._id)}} >Delete</button>
            </div>
        })
      }
    </div>
    </>
  )
}


export default App