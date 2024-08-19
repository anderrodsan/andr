//from Lee Rob

import { ImageResponse } from "next/og";
import { NextRequest } from "next/server";

export const runtime = "edge";

//Image Metadata
export const size = {
  width: 1920,
  height: 1080,
};

export async function GET(req: NextRequest) {
  const { searchParams } = req.nextUrl;
  const postTitle = searchParams.get("title");

  return new ImageResponse(
    (
      <div
        style={{
          height: "100%",
          width: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "flex-start",
          justifyContent: "center",
          backgroundImage: "url(https://andrs.vercel.app/og-bg.png)",
          backgroundSize: "1920px 1080px",
        }}
      >
        <div
          style={{
            marginLeft: 145,
            marginRight: 145,
            display: "flex",
            fontSize: 150,
            fontStyle: "normal",
            color: "white",
            fontWeight: "bold",
            whiteSpace: "pre-wrap",
            lineClamp: 2,
            lineHeightStep: 1.5,
          }}
        >
          {postTitle}
        </div>
      </div>
    ),
    {
      ...size,
    }
  );
}
