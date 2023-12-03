import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import { kv } from "@vercel/kv";

export async function GET(request: NextRequest) {
  const authHeader = request.headers.get("authorization");
  if (authHeader !== `Bearer ${process.env.CRON_SECRET}`) {
    return new Response("Unauthorized", {
      status: 401,
    });
  }

  const projectNames = [
    "react-magic-motion",
    "xp-newtab",
    "custoplayer",
    "euismod",
    "slick-fox",
  ];

  try {
    const results: { stargazers_count: string }[] = await Promise.all(
      projectNames.map((projectName) =>
        fetch(`https://api.github.com/repos/etesam913/${projectName}`).then(
          (r) => r.json()
        )
      )
    );
    const repoData = results.map((data, i) => ({
      name: projectNames[i],
      stars: data["stargazers_count"],
    }));

    try {
      await Promise.all(repoData.map(({ name, stars }) => kv.set(name, stars)));
      return NextResponse.json(
        {
          body: { status: "success" },
        },
        {
          status: 200,
        }
      );
    } catch {
      return NextResponse.json(
        {
          body: { status: "failure" },
        },
        {
          status: 500,
        }
      );
    }
  } catch {
    return NextResponse.json(
      {
        body: { status: "failure" },
      },
      {
        status: 500,
      }
    );
  }
}
