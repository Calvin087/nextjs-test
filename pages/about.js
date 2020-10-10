import Link from "next/link" // stops a full page refresh. Let's js take over like router
import Layout from "../components/Layout";

const About = () => (
    <Layout title="About">
        <p> welcome to the about page</p>

        <Link href="/">
            <a>go back home man</a>
        </Link>
        <br/>
        <img src="/calvinface.jpeg" alt="dave" height="200px" />
    </Layout>
)

export default About