"use server";

import { kv } from "@vercel/kv";
import { revalidatePath } from "next/cache";

export async function getStarCount(projectName: string) {
  try {
    const starCount: string | null = await kv.get(projectName);
    revalidatePath("/");
    return starCount;
  } catch {
    return "";
  }
}
