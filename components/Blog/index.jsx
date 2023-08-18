import React from "react"
import { Container, Content, Title, Span, Paragraph, ContainerCards, ContainerButtom, Buttom } from "./styled"
import BlogCards from "./BlogCards"
import Link from "next/link"

const blog = [
    {   
        id : '1',
        img : '/images/blogCards.png',
        alt: 'Imagem blog',
        title: 'Lorem ipsum dolor sit amet, consectetur adipiscing',
        text: 'Lorem enim ad minim veniam, quis nostrud  exercitation ullamco laboris nisi'
    },
    {
        id : '2',
        img : '/images/blogCards.png',
        alt: 'Imagem blog',
        title: 'Lorem ipsum dolor sit amet, consectetur adipiscing',
        text: 'Lorem enim ad minim veniam, quis nostrud  exercitation ullamco laboris nisi'
    },
    {
        id : '3',
        img : '/images/blogCards.png',
        alt: 'Imagem blog',
        title: 'Lorem ipsum dolor sit amet, consectetur adipiscing',
        text: 'Lorem enim ad minim veniam, quis nostrud  exercitation ullamco laboris nisi'
    },
    {
        id : '4',
        img : '/images/blogCards.png',
        alt: 'Imagem blog',
        title: 'Lorem ipsum dolor sit amet, consectetur adipiscing',
        text: 'Lorem enim ad minim veniam, quis nostrud  exercitation ullamco laboris nisi'
    },
    {
        id : '5',
        img : '/images/blogCards.png',
        alt: 'Imagem blog',
        title: 'Lorem ipsum dolor sit amet, consectetur adipiscing',
        text: 'Lorem enim ad minim veniam, quis nostrud  exercitation ullamco laboris nisi'
    }
]

export default function Blog () {
    return (
        <Container>
            <Content>
                <Title>fique por dentro do</Title>
                <Span>mundo do poker</Span>
                <Paragraph>Lorem enim ad minim veniam, quis nostrud  exercitation ullamco laboris nisi ut aliquip lorem enim lorem enim ad minim veniam</Paragraph>
                <ContainerCards>
                    {blog.map((blog, index) => (
                        index < 3 && (
                            <BlogCards key={blog.id} blog={blog} />
                        )
                    ))}
                </ContainerCards>
                <ContainerButtom>
                    <Link href="blog">
                        <Buttom>
                            LER TODOS OS BLOGS
                        </Buttom>
                    </Link>
                </ContainerButtom>
            </Content>
        </Container>
    )
}