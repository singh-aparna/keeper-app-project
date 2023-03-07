import React from "react";
import Footer from "./Footer";
import Header from "./Header";
import Note from "./Note.jsx";
import notes from "./notes";
function App()
{
    return (
            <div>
            <Header />
            <Footer />

            {notes.map(brief => <Note 
            key = {brief.id}
            title = {brief.title}
            content = {brief.content}
            />)

            }
            
            </div>
    );
}
export default App;