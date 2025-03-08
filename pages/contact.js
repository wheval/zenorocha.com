import React from 'react'
import Head from 'next/head'
import Base from '../layouts/Base'
import stripHtml from '../lib/strip-html'
import { Box } from '../components/Box'
import { styled } from '../stitches.config'

export async function getStaticProps() {
  const meta = {
    title: 'Contact // Wheval',
    tagline: 'Reach out.',
    image: '/static/images/reminder-bw.jpg',
    primaryColor: 'cyan',
    secondaryColor: 'green',
  }

  return { props: meta }
}

function Contact(props) {
  const { title, image } = props
  const description = `<strong>I love chatting</strong> with software engineers, tech founders, students, and creators. Feel free to reach out to me directly via email.`

  return (
    <>
      <Head>
        <title>{title}</title>
        <meta content={title} property="og:title" />
        <meta content={stripHtml(description)} name="description" />
        <meta content={stripHtml(description)} property="og:description" />
        <meta content="https://wheval.tech/contact" property="og:url" />
        <meta content={`https://wheval.tech${image}`} property="og:image" />
      </Head>

      <Box>
        <p dangerouslySetInnerHTML={{ __html: description }} />
        <EmailLink href="mailto:whevalmezeegbe@gmail.com">
          whevalmezeegbe@gmail.com
        </EmailLink>
      </Box>
    </>
  )
}

const EmailLink = styled('a', {
  color: '$cyan',
  fontSize: '1.5rem',
  textDecoration: 'none',
  transition: 'color 0.2s ease-in-out',
  '&:hover': {
    color: '$green'
  }
})

Contact.Layout = Base

export default Contact
