import { Notes } from './Notes';
import { useState } from 'react';


export default function App({notas}){

  let [notes, setNotes] = useState(notas)
  const [newNote, setNewNote] = useState("")
  const [cheked, setCheked] = useState()
  const [filter, setfilter] = useState(true)

  const guardarNota = (e)=>{
    setNewNote(e.target.value)
  }

  const important = (e)=>{
    setCheked(e.target.checked);
  }
  const añadirNota = (e)=>{
    e.preventDefault();
    if(newNote.length === 0){

    }else{
      let valor = "";
      cheked ? valor = "importante." : valor = false;

      const noteToAdd = {
        day: notes.length + 1,
        description: newNote,
        important: valor
      }
    
      setNotes(notes.concat(noteToAdd));
      setNewNote("")
    }
  }

  const eliminarNota = (e)=>{
    e.preventDefault();
    setNotes(notes.slice(0,-1));
    console.log(notes)
  }

  const filtrar = (e)=>{
    e.preventDefault();
    setfilter(!filter)
  }
  
  return (
    <div className='container'>
        <h1>Notas</h1>
        <form>
            <input type="text" onChange={guardarNota} value={newNote} required></input>
            <button type="submit" onClick={añadirNota}>Nueva nota</button>
            <button type="submit" onClick={eliminarNota}>Eliminar nota</button>
            <button type="submit" onClick={filtrar}>{filter === true ? "Mostrar todas" : "Mostrar importantes"}</button>
            <input type="checkbox" onChange={important}></input>
            <b>Nota importante</b>
        </form>
        {
          notes
          .filter(nota=>{
            if(!filter){
              return nota;
            }else{return nota.important === "importante";}
          })
          .map(nota=>(<Notes key={nota.day} {...nota}/>))
        }
    </div>
  )
  
}



