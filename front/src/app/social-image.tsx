import { ImageResponse } from "next/og";

export const socialImageSize = {
  width: 1200,
  height: 630
};

export const socialImageAlt =
  "Yusuf Hayırlı - Full-Stack Software Engineer portfolio";

export function createSocialImage() {
  return new ImageResponse(
    (
      <div
        style={{
          position: "relative",
          display: "flex",
          width: "100%",
          height: "100%",
          overflow: "hidden",
          background: "#f3eadb",
          color: "#142320",
          fontFamily: "Arial, sans-serif"
        }}
      >
        <div
          style={{
            position: "absolute",
            top: 54,
            right: 86,
            display: "flex",
            width: 265,
            height: 265,
            borderRadius: 999,
            background: "#9cd4d2"
          }}
        />
        <div
          style={{
            position: "absolute",
            right: 224,
            bottom: 48,
            display: "flex",
            width: 228,
            height: 228,
            borderRadius: 999,
            border: "52px solid #0a857f"
          }}
        />
        <div
          style={{
            position: "absolute",
            right: 54,
            bottom: 72,
            display: "flex",
            width: 260,
            height: 208,
            transform: "rotate(-7deg)",
            background: "#f06449"
          }}
        />
        <div
          style={{
            position: "relative",
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
            width: "100%",
            padding: "68px 72px 64px"
          }}
        >
          <div
            style={{
              display: "flex",
              fontSize: 25,
              fontWeight: 700,
              letterSpacing: "0.13em"
            }}
          >
            YUSUF HAYIRLI
          </div>
          <div style={{ display: "flex", flexDirection: "column" }}>
            <div
              style={{
                display: "flex",
                fontSize: 80,
                fontWeight: 800,
                lineHeight: 0.94,
                letterSpacing: "-0.055em"
              }}
            >
              FULL-STACK
            </div>
            <div
              style={{
                display: "flex",
                fontSize: 80,
                fontWeight: 800,
                lineHeight: 0.94,
                letterSpacing: "-0.055em",
                color: "#0a857f"
              }}
            >
              ENGINEERING.
            </div>
            <div
              style={{
                display: "flex",
                width: 620,
                marginTop: 32,
                fontSize: 25,
                lineHeight: 1.35
              }}
            >
              Commerce products, web platforms and durable delivery systems.
            </div>
          </div>
          <div
            style={{
              display: "flex",
              fontSize: 19,
              fontWeight: 700,
              letterSpacing: "0.08em"
            }}
          >
            REACT · NEXT.JS · .NET · SFCC · DOCKER
          </div>
        </div>
      </div>
    ),
    socialImageSize
  );
}
