import AuthButtons from '@/components/ui/auth-buttons/auth-buttons';
import { auth } from '@/auth';
import { redirect } from 'next/navigation';
import Link from 'next/link';

export default async function Home() {
  const session = await auth();
  if (session) redirect(`/pretrips/${session.user?.email}`);

  return (
    <div className="flex flex-col items-center justify-items-center min-h-screen gap-4 p-4  ">
      <div className="flex flex-col border items-center justify-center rounded-md w-full md:w-4/6  p-4 shadow-md gap-4 ">
        <p className="text-sm  indent-8 border rounded-sm p-8 shadow-md">
          Currently, only GitHub, GitLab login is available. GitHub/GitLab/Discord accounts are free - feel free to sign up to try the app!
          Built with Next.js 15, TanStack Query, Tailwind CSS, NextAuth and TypeScript.
        </p>
        <p>
           Checkout our <Link className='underline' href='/termsOfService'>terms of service</Link> and <Link className='underline' href='/privacy'>privacy policy </Link>.
        </p>
        <AuthButtons session={session} />
      </div>
    </div>
  );
}

