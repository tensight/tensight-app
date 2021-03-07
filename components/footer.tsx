import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

const Footer: React.FC = () => {
  return (
    <footer className="w-full text-center border-t border-grey p-4 pin-b">
      <Link href="https://www.buymeacoffee.com/alexnaka">
        <a>
          <Image src={encodeURI("https://img.buymeacoffee.com/button-api/?text=Fuel my coffee addiction&emoji=&slug=alexnaka&button_colour=FF5F5F&font_colour=ffffff&font_family=Arial&outline_colour=000000&coffee_colour=FFDD00")}
            alt="Buy me a coffee button"
            width={158 * 1.6}
            height={25 * 1.6}
          />
        </a>
      </Link>
      <p className="font-serif">Made with ☕️ &nbsp;by <a href="http://twitter.com/nakaflocka3">Alex</a></p>
      <p className="font-serif">© 2021 Tensight</p>
    </footer>
  );
}

export default Footer