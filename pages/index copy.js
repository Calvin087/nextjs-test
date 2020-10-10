import Link from "next/link"
import { Component } from "react"
import Layout from "../components/Layout"

// i've imported Layout from components. Whatever I place inside these tags
// then gets passed on as a prop to the layout Component as children.

const Index = () => (
    <Layout title="Home">
        <p>welcome to the home page</p>
            <Link href="/about">
                <a>Go To About page</a>
            </Link>
    </Layout>
)

export default Index