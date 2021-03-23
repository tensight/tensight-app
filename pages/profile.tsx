import { useSession } from 'next-auth/client'

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
      <p>Coming soon...</p>
    </div>
  )
}

export default ProfilePage