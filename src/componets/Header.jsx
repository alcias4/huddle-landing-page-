import './header.css'

export function Header(){
    return (
        <div className="header">
            <img  src="./images/logo.svg" alt="logo" />
            <button className='btn-header'>Try It Free</button>
        </div>
    )
}