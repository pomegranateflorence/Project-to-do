import "./header.css"
import './ThemeButton.css'
import { useState } from 'react'



function Header() {
    const [textColour, setTextColour] = useState('rgb(0, 195, 195)')
    const [backgroundColour, setBackgroundColour] = useState('rgb(32, 39, 52)')
    function ThemeButtons() {
        function darkTheme() {
            setTextColour('rgb(0, 195, 195)')
            setBackgroundColour('rgb(32, 39, 52)')
        }
        function lightTheme() {
            setTextColour('rgb(32, 39, 52)')
            setBackgroundColour('rgb(0, 195, 195)')
        } 
        return ( 
        <div className="Theme-Buttons">
            <button className="Light-Button" onClick={lightTheme}>Light Mode</button>
            <button className="Dark-Button" onClick={darkTheme}>Dark Mode</button>
        </div>
        )
    }

    return (
    <header className="App-header" style={{background: backgroundColour, color: textColour}}>
        <img src='https://images.pexels.com/photos/1226398/pexels-photo-1226398.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1' className="App-logo" alt="logo" />
        <h1 className='Header-title'>To-Do<br></br>List</h1>
        <ThemeButtons />
    </header>
    )
}   





export default Header