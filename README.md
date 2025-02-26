```

```

```

export function middleware(req: NextRequest) {
  const host = req.headers.get("host") || "";
  const subdomain = host.includes("localhost")
    ? host.split(".")[0].split(".")[0]
    : host.split(".")[0];

  const allowedDomains = ["localhost", "helldkf", "dgdf", "www"];

  if (allowedDomains.some((domain) => subdomain.includes(domain))) {
    return NextResponse.next();
  }

  if (subdomain) {
    return NextResponse.rewrite(new URL(`/${subdomain}`, req.url));
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/((?!api/|_next/|_static/|_vercel|[\\w-]+\\.\\w+).*)"],
};

```
