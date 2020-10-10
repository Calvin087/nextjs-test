import Link from "next/link"

const Layout = ({ children, title }) => ( // destructuring the props passed in, and taking children off of it.
  <div className="root">
    <header>
    
    <Link href="/"><a>Home</a></Link>
    <Link href="/about"><a>About</a></Link>
    <Link href="/hireme"><a>HireMe</a></Link>

    </header>

        <h1>{title}</h1>
        {children}

    <footer>&copy; {new Date().getFullYear() + " Calvin Turner"}</footer>
    <style jsx>{`
        .root{
            display: flex;
            justify-content: center;
            align-items: center;
            flex-direction: column;
        }

        header{
            width: 100%;
            display: flex;
            justify-content: space-around;
            padding: 1em;
            font-size: 1.2em;
            background: indigo;
        }

        header a {
            color: darkgrey;
            text-decoration: none;
        }
        header a:hover{
            font-weight: bold;
            color: lightgrey;
        }
        footer {
            padding: 1em;

        }

    `}</style>
    <style global jsx>{`
        body{
            margin: 0;
            font-size: 110%;
            background: #f0f0f0;
        }
    `}</style>
    </div>
);

export default Layout