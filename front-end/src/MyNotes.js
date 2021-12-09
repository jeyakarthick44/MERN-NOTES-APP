import React from 'react'
import { Button,Card } from "react-bootstrap";
import MainScreen from './MainScreen';
import { Link } from "react-router-dom";
import notes from "./Notes"

const MyNotes = () => {
    return (
            <MainScreen title="welcome" >
                <Link to="/createnote">
                    <Button style={{ marginLeft: 10, marginBottom: 6 }} size="lg">
                        Create new Note
                    </Button>

                    {notes.map((note)=>(
                        <Card style={{margin:10}}>
                        <Card.Header style={{ display: "flex" }}>
                            <span style={{
                                color: "black",
                                textDecoration: "none",
                                flex: 1,
                                cursor: "pointer",
                                alignSelf: "center",
                                fontSize: 18,
                            }}>{note.title}</span>
                            <div>
                                <Button style={{ margin: 10 }}>Edit</Button>
                                <Button variant="danger" className="max-2">Delete</Button>
                            </div>
                        </Card.Header>
                        </Card>
                    ))}
                    
                </Link>
            </MainScreen>
    )
}

export default MyNotes
