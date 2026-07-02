import { NextResponse } from "next/server";

export async function GET() {
  try {
    const res = await fetch("https://github.com/users/sheikhsalman/contributions", {
      headers: {
        "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36"
      },
      next: { revalidate: 3600 } // Cache for 1 hour
    });

    if (!res.ok) {
      return NextResponse.json({ error: "Failed to fetch from GitHub" }, { status: 500 });
    }

    const html = await res.text();
    
    // Find the SVG start and end
    const svgStart = html.indexOf("<svg");
    const svgEnd = html.indexOf("</svg>", svgStart);
    
    if (svgStart === -1 || svgEnd === -1) {
      return NextResponse.json({ error: "SVG not found in GitHub response" }, { status: 500 });
    }
    
    let svg = html.substring(svgStart, svgEnd + 6);
    
    // Inject custom styles to override GitHub colors to match our premium Amber/grayscale theme
    const customStyle = `
      <style>
        svg { width: 100%; height: auto; background: transparent; }
        .ContributionCalendar-day[data-level="0"] { fill: #121214 !important; rx: 2px; ry: 2px; }
        .ContributionCalendar-day[data-level="1"] { fill: #451a03 !important; rx: 2px; ry: 2px; }
        .ContributionCalendar-day[data-level="2"] { fill: #78350f !important; rx: 2px; ry: 2px; }
        .ContributionCalendar-day[data-level="3"] { fill: #d97706 !important; rx: 2px; ry: 2px; }
        .ContributionCalendar-day[data-level="4"] { fill: #f59e0b !important; rx: 2px; ry: 2px; }
        text.ContributionCalendar-label { fill: #52525b !important; font-size: 9px; font-family: monospace; }
        .sr-only { display: none; }
        h2.sr-only { display: none; }
        .ContributionCalendar-day { outline: none !important; }
      </style>
    `;
    
    // Inject the custom style block inside the SVG
    svg = svg.replace(">", ">" + customStyle);
    
    return new NextResponse(svg, {
      headers: {
        "Content-Type": "image/svg+xml",
        "Cache-Control": "public, max-age=3600"
      }
    });
  } catch (error: any) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}
