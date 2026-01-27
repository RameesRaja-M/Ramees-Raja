'use client'

import Link from 'next/link'
import React from 'react'

import {
  RiYoutubeFill,
  RiLinkedinFill,
  RiGithubFill,
  RiInstagramFill,
  RiCodeFill
} from 'react-icons/ri'


const icons = [
  {
    path: 'https://www.linkedin.com/in/ramees-raja-m/',
    name: <RiLinkedinFill />,
  },
  {
    path: 'https://github.com/RameesRaja-M',
    name: <RiGithubFill />,
  },
  {
    path: '/',
    name: <RiYoutubeFill />,
  },
  {
    path: '/',
    name: <RiInstagramFill />,
  },
  {
    path: 'https://leetcode.com/u/ramees-raja-m/',
    name: <RiCodeFill />,
  },
]

const Socials = ({ containerStyles, iconsStyles }) => {
  return (
    <div className={`${containerStyles}`}>
      {
        icons.map((icon, index) => {
          return (
            <Link target='_blank' href={icon.path} key={index}>
              <div className={`${iconsStyles}`}>{icon.name}</div>
            </Link>
          )
        })
      }
    </div>
  )
}

export default Socials