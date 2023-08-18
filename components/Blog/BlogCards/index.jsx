import React from 'react'
import { Content, Img, Title, Paragraph, Ancora, Arrow } from './styled'
import Link from 'next/link'


export default function BlogCards ({blog}) {
    return (
        <Content>
            <Img src={blog.img} alt={blog.alt}/>
            <Title>{blog.title}</Title>
            <Paragraph>{blog.text}</Paragraph>
            <Link href={blog.id}>
                <Ancora>
                    LER MAIS
                    <Arrow src='/images/icons/Arrow.png'/>
                </Ancora>
            </Link>
        </Content>
    )

}