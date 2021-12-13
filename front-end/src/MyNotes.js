import React from 'react'
import { Accordion, Badge, Button,Card } from "react-bootstrap";
import MainScreen from './MainScreen';
import { Link } from "react-router-dom";
import notes from "./Notes"


const MyNotes = () => {

const deleteHandler = (id) => {
    if(window.confirm("are you sure")){

    }
}

// const fetchNotes = async() => {
//     const data = axios.get("api/notes")
// }

// useEffect(() => {
//     fetchNotes
// }, [])


    return (
            <MainScreen title="welcome" >
                <Link to="/createNote">
                    <Button style={{ marginLeft: 10, marginBottom: 6 }} size="lg">
                        Create new Note
                    </Button>
                </Link>
                    {notes.map((note)=>(
                <Accordion>
                        <Card style={{margin:10}}>
                        <Card.Header style={{ display: "flex" }}>
                            <span style={{
                                color: "black",
                                textDecoration: "none",
                                flex: 1,
                                cursor: "pointer",
                                alignSelf: "center",
                                fontSize: 18,
                            }}
                            >   
                            <Accordion.Header> {note.title} </Accordion.Header>

                            </span>
                            <div>
                                <Button href={`/note/${note.id}`} style={{ margin: 10 }}>Edit</Button>
                                <Button variant="danger" className="max-2" onClick={()=> deleteHandler(note.id)}>Delete</Button>
                            </div>
                        </Card.Header>
                        <Accordion.Body eventKey="1">
                                    <Card.Body>
                                        <h4>
                                            <Badge style={{ backgroundColor: "#17f81c" }} variant="success">Category - {note.category}</Badge>
                                        </h4>
                                        <blockquote className="blockquote mb-0">
                                            <p>
                                                {note.content}
                                            </p>
                                            <footer className="blockquote-footer">
                                                Someone famous in <cite title="Source Title">Source Title</cite>
                                            </footer>
                                        </blockquote>
                                    </Card.Body>
                        </Accordion.Body>
                            
                        </Card>
                  </Accordion>  
                    ))}
            </MainScreen>
    )
}

export default MyNotes
