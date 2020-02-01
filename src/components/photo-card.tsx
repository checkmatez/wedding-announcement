import * as React from 'react'
import styled from 'styled-components'
import Img, { GatsbyImageProps } from 'gatsby-image'

interface StylingProps {
  wide: boolean
}

const Card = styled.div<StylingProps>`
  margin: 20px 0px;
  display: flex;
  flex-direction: column;
  border-radius: 10px;
  background-color: hsla(201, 95%, 60%, 1);
  box-shadow: 0 10px 24px hsla(0, 0%, 0%, 0.4);
  max-width: ${p => (p.wide ? '800px' : '400px')};
  width: 100%;
  position: relative;
`

const Image = styled(Img)<StylingProps>`
  border-radius: 10px;
  max-width: ${p => (p.wide ? '800px' : '400px')};
`

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  z-index: 10;
  background-color: hsla(0, 0%, 0%, 0.3);
  padding-bottom: 5px;
  top: 0px;
  left: 0px;
  right: 0px;
  border-top-left-radius: 10px;
  border-top-right-radius: 10px;
`

const Paragraph = styled.p`
  font-weight: bold;
  font-size: 1.5rem;
  margin: 0;
`

interface PhotoCardProps extends GatsbyImageProps {
  title: string
  wide?: boolean
}

export const PhotoCard: React.FC<PhotoCardProps> = ({
  title,
  wide = false,
  ...imageProps
}) => {
  return (
    <Card wide={wide}>
      <Wrapper>
        <Paragraph>{title}</Paragraph>
      </Wrapper>
      <Image wide={wide} {...imageProps} />
    </Card>
  )
}
