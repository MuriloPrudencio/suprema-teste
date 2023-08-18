import React from "react"
import BlogCards from "../../../components/Blog/BlogCards"

import styled from "styled-components"


const Container = styled.div`
    width: 88%;
    margin: 3em 1em;
`;

const ContainerCards = styled.div`
    margin: 2em 0em;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;

    @media(max-width: 1433px) {
        justify-content: center;
        gap: 2em;
    }
`;

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
            <ContainerCards>
                {blog.map((blog) => (
                    <BlogCards key={blog.id} blog={blog} />
                ))}
            </ContainerCards>
        </Container>

    )
}