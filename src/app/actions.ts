"use server";

import { kv } from "@vercel/kv";

export async function getStarCount(projectName: string) {
  const starCount: string | null = await kv.get(projectName);
  return starCount;
}
