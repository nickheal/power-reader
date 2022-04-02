import React from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { useRecoilState } from 'recoil';
import { userState } from '../state/user';
import { Routes } from '../utils/routes';

export default function RequireUser({ children }: { children: JSX.Element }) {
  const [user] = useRecoilState(userState);
  const location = useLocation();

  if (!user) {
    return <Navigate to={Routes.Introduction} state={{ from: location }} replace />;
  } else {
    return children;
  }
}
