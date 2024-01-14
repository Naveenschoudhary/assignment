import AuthButton from './AuthButton'
import { createClient } from '@/utils/supabase/server'
import { cookies } from 'next/headers'

const Header = () => {
  const cookieStore = cookies()

  const canInitSupabaseClient = () => {
    try {
      createClient(cookieStore)
      return true
    } catch (e) {
      return false
    }
  }

  const isSupabaseConnected = canInitSupabaseClient()
  return (
    <nav className='header-background container text-white  flex items-center justify-center w-full h-[60px] mt-8'>
      <div className='flex justify-between w-full items-center' style={{ paddingLeft: "10px", paddingRight: "10px" }}>
        <div className='text-xl font-bold'>Logo</div>
        {isSupabaseConnected && <AuthButton />}
      </div>
    </nav>
  );
};

export default Header;
