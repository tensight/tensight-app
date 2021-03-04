import React from 'react'
import Link from 'next/link'

const links = [
  { href: 'https://github.com/tensight', label: 'GitHub' },
  // { href: 'https://nextjs.org/docs', label: 'Login' },
]

const Nav: React.FC = () => {
  return (
    <nav>
      <ul className="flex justify-between items-center p-8">
        <li>
          <Link href="/">
            <a className="text-gray-800 no-underline font-serif text-xl font-bold">Tensight</a>
          </Link>
        </li>
        <ul className="flex justify-between items-center space-x-4">
          {links.map(({ href, label }) => (
            
            <li key={`${href}${label}`}>
              <a href={href} className="btn-purple no-underline">
                {label}
              </a>
            </li>
          ))}
        </ul>
      </ul>
    </nav>
  )
}

export default Nav