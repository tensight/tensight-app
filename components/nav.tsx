import React from 'react'
import { useSession } from 'next-auth/client'
import Link from 'next/link'

const Nav: React.FC = () => {
  const [session, loading] = useSession()

  const links = [
    { href: 'https://github.com/tensight', label: 'GitHub' },
  ]

  const getLinksJSX = (links) => {
    session
      ? links.push({ href: '/profile', label: 'Profile' })
      : links.push({ href: '/api/auth/signin', label: 'Sign in' })
    return links.map(({ href, label }) => (
      <li key={`${href}${label}`}>
        <Link href={href}>
          <a className="btn-purple no-underline">
            {label}
          </a>
        </Link>
      </li>
    ))
  }

  return (
    <nav>
      <ul className="flex justify-between items-center p-8">
        <li>
          <Link href="/">
            <a className="text-gray-800 no-underline font-serif text-xl font-bold">Tensight</a>
          </Link>
        </li>
        <ul className="flex justify-between items-center space-x-4">
          {getLinksJSX(links)}
        </ul>
      </ul>
    </nav>
  )
}

export default Nav