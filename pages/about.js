import { styled } from '../stitches.config'
import React, { useRef } from 'react'
import Head from 'next/head'
import Image from 'next/image'
import { parseISO, format, intervalToDuration } from 'date-fns'
import Base from '../layouts/Base'
import { ButtonPrimary } from '../components/ButtonPrimary'
import Pronunciation from '../components/Pronunciation'
import Toast from '../components/Toast'
import Toolbox from '../components/Toolbox'
import stripHtml from '../lib/strip-html'
import items from '../data/about'
import dynamic from 'next/dynamic'
import copyBioIcon from '../public/static/icons/copy-bio.json'
import downloadIcon from '../public/static/icons/download.json'

// Dynamic import of Lottie with SSR disabled
const Lottie = dynamic(() => import('lottie-react'), { ssr: false })

export async function getStaticProps() {
  const meta = {
    title: 'About // Wheval',
    description:
      "Wheval is a Frontend Developer and Open Source Contributor.",
    tagline: 'Build. Contribute. Repeat.',
    image: '/static/images/about-bw.jpg',
    primaryColor: 'cyan',
    secondaryColor: 'green',
  }

  return { props: meta }
}

function About(props) {
  const { title, description, image } = props
  const [toastTitle, setToastTitle] = React.useState('')
  const [toastDescription, setToastDescription] = React.useState('')
  const [showToast, setShowToast] = React.useState(false)
  const copyBioRef = React.useRef()
  const downloadRef = React.useRef()

  const renderIntro = () => {
    return (
      <Container>
        <Section>
          <Image
            alt="Zeno"
            src="/static/images/avatar.jpeg"
            width="336"
            height="336"
            placeholder="blur"
            blurDataURL="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAQAAAAECAIAAAAmkwkpAAAACXBIWXMAABYlAAAWJQFJUiTwAAAAP0lEQVQImQE0AMv/AFBQUJKSkqmpqaOjowCurq7v7+/Jycm5ubkA////jIyMn5+fg4ODADAwMD09PWlpaQAAAApRGnEHblMWAAAAAElFTkSuQmCC"
            priority
          />
        </Section>
        <Section>
          <Paragraph
            css={{
              marginTop: '16px',
              '@bp2': { marginTop: '-6px' },
            }}
          >
              <strong>Hey, I'm Wheval.</strong><br/>
            {/* <Pronunciation /> */}
          </Paragraph>
          <Paragraph>
            I'm a Frontend Developer with experience building software products. I'm currently working as an <strong>Open Source Developer</strong>.
            I'm also a student of Electrical Engineering.

          </Paragraph>
          <Paragraph>
            <strong>I love dark mode</strong>, open source, and blockchain technology.
            When I'm not working, I like making music, watching movies, and{' '}
            <strong>eating cheese</strong>.
          </Paragraph>
        </Section>
      </Container>
    )
  }

  // const renderBio = () => {
  //   const btnStyle = { display: 'inline-flex', justifyContent: 'center', alignItems: 'center' }
  //   const iconStyle = { width: 24, height: 24, marginRight: 8 }

  //   return (
  //     <div>
  //       <p>
  //         This is made for journalists, podcast hosts, and event organizers to
  //         copy-and-paste.
  //       </p>
  //       <blockquote>
  //         <p>{description}</p>
  //       </blockquote>
  //       <ButtonsContainer>
  //         <ButtonPrimary
  //           as="button"
  //           style={btnStyle}
  //           onClick={copyBio}
  //           onMouseEnter={() => copyBioRef.current?.play()}
  //           onMouseLeave={() => copyBioRef.current?.stop()}
  //         >
  //           <Lottie lottieRef={copyBioRef} style={iconStyle} animationData={copyBioIcon} loop={false} autoplay={false} />
  //           Copy Bio
  //         </ButtonPrimary>
  //         <span style={{ margin: '0 20px 0 10px' }}>•</span>
  //         <ButtonPrimary
  //           as="a"
  //           download
  //           role="button"
  //           href="/static/images/avatar.jpg"
  //           style={btnStyle}
  //           onClick={downloadHeadshot}
  //           onMouseEnter={() => downloadRef.current?.play()}
  //           onMouseLeave={() => downloadRef.current?.stop()}
  //         >
  //           <Lottie lottieRef={downloadRef} style={iconStyle} animationData={downloadIcon} loop={false} autoplay={false} />
  //           Download Headshot
  //         </ButtonPrimary>
  //       </ButtonsContainer>
  //     </div>
  //   )
  // }

  const renderAll = () => {
    return items.map((item, index) => {
      return (
        <div style={{ marginBottom: 40 }} key={index}>
          <h3>{item.jobTitle}</h3>
          <p style={{ margin: 0 }}>
            <a href={item.companyUrl} target="_blank">
              {item.company}
            </a>
            <span> • {item.location}</span>
          </p>
          <p style={{ margin: 0 }}>
            <span>{format(parseISO(item.startDate), 'LLL yyyy')}</span>
            <span> – </span>
            <span>
              {item.endDate
                ? format(parseISO(item.endDate), 'LLL yyyy')
                : 'Present'}
            </span>
            <span> • </span>
            <span>{getDuration(item.startDate, item.endDate)}</span>
          </p>
        </div>
      )
    })
  }

  const getDuration = (startDate, endDate) => {
    const durationObj = intervalToDuration({
      start: parseISO(startDate),
      end: endDate ? parseISO(endDate) : new Date(),
    })

    let durationStr = ''

    if (durationObj.years > 1) {
      durationStr = `${durationObj.years} yrs `
    } else if (durationObj.years === 1) {
      durationStr = `${durationObj.years} yr `
    }

    durationStr += `${durationObj.months} mos`

    return durationStr
  }

  const downloadHeadshot = () => {
    setToastTitle('Downloading...')
    setToastDescription('You can now add this photo to your fancy site.')
    setShowToast(true)
  }

  const copyBio = e => {
    e.preventDefault()
    navigator.clipboard.writeText(description)

    setToastTitle('Copied :D')
    setToastDescription('You can now paste it anywhere.')
    setShowToast(true)
  }

  return (
    <>
      <Head>
        <title>{title}</title>
        <meta content={title} property="og:title" />
        <meta content={stripHtml(description)} name="description" />
        <meta content={stripHtml(description)} property="og:description" />
        <meta content="https://zenorocha.com/about" property="og:url" />
        <meta content={`https://zenorocha.com${image}`} property="og:image" />
      </Head>

      {renderIntro()}


      <Toolbox />

      <h2>Career</h2>
      {renderAll()}

      <Toast
        title={toastTitle}
        description={toastDescription}
        isSuccess={true}
        showToast={showToast}
        setShowToast={setShowToast}
      />
    </>
  )
}

const Container = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'space-between',
  '@bp2': { flexDirection: 'row' },
})

const Paragraph = styled('p', {
  '@bp2': { margin: '15px 0' },
})

const ButtonsContainer = styled('p', {
  display: 'flex',
  alignItems: 'center',
})

const Section = styled('div', {
  marginTop: '0px',
  width: 'auto',
  '@bp2': { width: '48%' },
})

About.Layout = Base

export default About
