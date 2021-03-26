import { GetStaticProps } from 'next'
import { useSession } from 'next-auth/client'
import Image from 'next/image'

const ProfilePage: React.FC = () => {
  const [session, loading] = useSession()

  return (
    <div className="w-full h-full flex justify-center items-center p-8">
      <style jsx global>{`
          body {
            background-color: #e5e5e3;
          }
        `}
      </style>
      <header className="flex">
        <div className="text-center">
          <Image
            src={`${session.user.image}`}
            width={128}
            height={128}
            className="rounded-full"
          />
          <h1 className="text-3xl font-bold">{session.user.name}</h1>
        </div>
      </header>
    </div>
  )
}

// export const getStaticProps: GetStaticProps = async (context) => {
//   const awards = await getUser()
// }

export default ProfilePage