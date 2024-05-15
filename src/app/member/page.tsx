'use client';
import { redirect } from 'next/navigation';
import { useSession } from 'next-auth/react';

const MemberPage = () => {
  const { data: sessionData } = useSession();
  if (!sessionData || !sessionData.user) redirect('/login');
  return redirect('/member/dashboard');
};

export default MemberPage;
