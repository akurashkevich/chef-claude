import chefClaudeLogo from "../images/chef-claude-icon.png"

export default function Header() {
    return (
        <header className="header">
            <img className="logo" src={chefClaudeLogo}/>
            <h1 className="logo-text">Chef Claude</h1>
        </header>
    )
}