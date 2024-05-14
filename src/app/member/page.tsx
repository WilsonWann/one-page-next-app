'use client';
import React from 'react';
import { redirect } from 'next/navigation';
import { useSession } from 'next-auth/react';

type Props = {};

const MemberPage = (props: Props) => {
  const { data: sessionData } = useSession();
  if (!sessionData || !sessionData.user) redirect('/login');
  return <div>MemberPage</div>;
};

export default MemberPage;
