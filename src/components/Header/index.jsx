import './styles.css'
import { Link } from 'react-router-dom'
import Home from '../../pages/Home'
import About from '../../pages/About'
import Character from '../../pages/Character'

export default function Header () {
    return (
        
        <header  id='cabecalho'> 
            <div className='welcome'>
            <h1>Bem-vindo ao meu site</h1>
            </div>
                <nav className='menu'>
                    <ul>
                    <Link to = {'/'}><li>Home</li></Link>
                    <Link to = {'/About'}><li>About</li></Link>
                    <Link to = {'/Character'}><li>Characters</li></Link>
                    </ul>
                </nav>
        </header>
        
    )
}