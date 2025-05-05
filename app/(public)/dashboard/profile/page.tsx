"use client";

import { useSession } from "next-auth/react";
import { useEffect } from "react";

export default function Profile() {
  const { data: session } = useSession();
  useEffect(() => {
    console.log({ Name: "Angel", Age: 24, City: "Santo Domingo Oeste" });
  }, []);
  return (
    <>
      <h2>Page - Profile</h2>
      <div className="flex flex-col">
        <span>{session?.user?.name}</span>
      </div>
    </>
  );
}
