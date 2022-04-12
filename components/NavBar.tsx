

// TODO: posts, projects, contact page, github
// Use tailwind to spice up the css

function NavBar() {
    return (
    <div>
        <a href="/posts"><button className="btn">posts</button></a>
        <a href="/projects"><button className="btn">projects</button></a>
        <a href="/about"><button className="btn">about</button></a>
        <a href="/contact"><button className="btn">contact</button></a>
    </div>
    )
}

export default NavBar