'use client';
import React, { useEffect } from 'react';
import { signOut } from 'next-auth/react';

type Props = {};

const Logout = (props: Props) => {
  useEffect(() => {
    signOut({ redirect: true, callbackUrl: '/login' });
  }, []);
};

export default Logout;
