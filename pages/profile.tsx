import Image from 'next/image'
import Link from 'next/link'
import { useSession } from 'next-auth/client'

const ProfilePage = () => {
  const [session, loading] = useSession()

  return (
    
    <div className="w-full h-full flex justify-center items-center p-8">
      <style jsx global>{`
          body {
            background-color: #e5e5e3;
          }
        `}
      </style>
      {!session &&
        <div className="font-semibold text-3xl">
          Not signed in. Please &nbsp;
          <Link href='/api/auth/signin'>
            <a>Sign in</a>
          </Link>
        </div>}
      {session && <header className="flex">
        <div className="text-center">
          <Image
            src={`${session.user.image}`}
            width={128}
            height={128}
            className="rounded-full"
          />
          <h1 className="text-3xl font-bold">{session.user.name}</h1>
        </div>
      </header>}
    </div>
  )
}

export default ProfilePage