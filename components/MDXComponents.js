/* eslint-disable react/display-name */
import React from 'react'
import { TOCInline } from 'pliny/ui/TOCInline'
import { Pre } from 'pliny/ui/Pre'
import { BlogNewsletterForm } from 'pliny/ui/NewsletterForm'
import Image from './Image'
import CustomLink from './Link'
export const Wrapper = ({ layout, content, ...rest }) => {
  const Layout = require(`../layouts/${layout}`).default
  return <Layout content={content} {...rest} />
}

const YouTube = ({ id }) => {
  return (
    <div>
      <iframe
        width="100%"
        height="400"
        src={'https://www.youtube.com/embed/' + id}
        title="YouTube video player"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        allowFullScreen
      ></iframe>
    </div>
  )
}

const GoogleMap = ({ id }) => {
  return (
    <div>
      <iframe
        src={`https://www.google.com/maps/d/u/0/embed?mid=${id}&ehbc=2E312F`}
        width="100%"
        height="450"
        title="Google Map"
      ></iframe>
    </div>
  )
}

export const MDXComponents = {
  Image,
  TOCInline,
  a: CustomLink,
  pre: Pre,
  wrapper: Wrapper,
  BlogNewsletterForm,
  YouTube,
  GoogleMap,
}
