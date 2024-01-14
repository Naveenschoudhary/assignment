import { createClient } from '@/utils/supabase/server'
import Link from 'next/link'
import { cookies } from 'next/headers'
import { redirect } from 'next/navigation'

export default async function AuthButton() {
  const cookieStore = cookies()
  const supabase = createClient(cookieStore)

  const {
    data: { user },
  } = await supabase.auth.getUser()

  const signOut = async () => {
    'use server'

    const cookieStore = cookies()
    const supabase = createClient(cookieStore)
    await supabase.auth.signOut()
    return redirect('/auth/login')
  }

  return user ? (
    <div className="flex items-center gap-4 text-white">
      Hey, {user.email}!
      <form action={signOut}>
        <button className="py-2 px-4 rounded-md no-underline hover:text-black  hover:bg-btn-background-hover">
          Logout
        </button>
      </form>
    </div>
  ) : (
    <div className='flex gap-4 items-center justify-center'>
      <Link
        href="/auth/login"
      >
        Login
      </Link>
      <Link className="mainBtn " href={'/auth/ragister'}>Create Account</Link>
    </div>

  )
}
