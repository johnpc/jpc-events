import { getAllEvents } from "@/app/helpers/getAllEvents";
import { NextResponse } from "next/server";

/**
 * Handles GET requests to fetch events
 * @param {Request} request - The incoming request object.
 * @returns {NextResponse} - The response object
 */
export async function GET(request: Request) {
  return NextResponse.json(await getAllEvents());
}
