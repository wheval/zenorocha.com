import { styled } from '../stitches.config'

export default function Logo() {
  return (
    <LogoContainer>
      <svg width="57" height="36" viewBox="0 0 57 36" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M42.6919 34.8358L53.5741 0.579254H44.0441L38.0556 27.3663L32.2604 0.708035H21.5713L15.9692 27.4307L9.91636 0.579254H0L10.8822 34.8358H20.9918L26.8514 8.75703L32.6467 34.8358H42.6919ZM53.5504 35.2565C55.4556 35.2565 57 33.7121 57 31.8069C57 29.9018 55.4556 28.3574 53.5504 28.3574C51.6453 28.3574 50.1009 29.9018 50.1009 31.8069C50.1009 33.7121 51.6453 35.2565 53.5504 35.2565Z"
          fill="currentColor"
        />
      </svg>
    </LogoContainer>
  )
}

const LogoContainer = styled('div', {
  display: 'flex',
  alignItems: 'center',
  color: '$primary',
  transition: 'color 0.3s ease',
  '&:hover': {
    color: '$secondary'
  }
})