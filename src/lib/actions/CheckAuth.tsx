"use client";
import React, { useEffect, useState } from "react";
import { redirect } from "next/navigation";
import useCheckToken from "@/hooks/useCheckToken";
import Loader from "@/app/components/Loader";

export default function isAuth(Component: any) {
  return function IsAuth(props: any) {
    const { loading: checkTokenLoading, isAuthenticated } = useCheckToken();
    const [loading, setLoading] = useState(true);

    useEffect(() => {
      if (!checkTokenLoading) {
        setLoading(false);
      }
    }, [checkTokenLoading]);

    if (loading) {
      // Render loading indicator or skeleton
      return <Loader />;
    }

    if (!isAuthenticated) {
      return redirect("/");
    }

    return <Component {...props} />;
  };
}
