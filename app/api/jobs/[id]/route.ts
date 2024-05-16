import { NextResponse } from "next/server";
import { data } from "../route";
export const GET = async (req: Request) => {
  try {
    const ids = req.url.split("jobs/")[1];

    const result = await data.jobs.find((id) => id.id.toString() === ids);
    if (!result) {
      return NextResponse.json({ message: "Not Found" }, { status: 404 });
    }
    return NextResponse.json({ result }, { status: 200 });
  } catch (err) {
    return NextResponse.json({ message: "Error", err }, { status: 500 });
  }
};
