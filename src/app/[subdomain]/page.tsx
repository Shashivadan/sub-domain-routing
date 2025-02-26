import React from "react";

export default async function Page({
  params,
}: {
  params: Promise<{ subdomain: string }>;
}) {
  const subdomain = (await params).subdomain;
  return (
    <div className=" h-screen flex items-center justify-center">
      {subdomain}
    </div>
  );
}
