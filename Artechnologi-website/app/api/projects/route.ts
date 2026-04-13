// import { NextResponse } from "next/server";

// const BACKEND = process.env.BACKEND_URL || "http://localhost:5000";

// // GET /api/projects - Proxy to backend
// export async function GET() {
//   try {
//     const res = await fetch(`${BACKEND}/projects`);
//     const data = await res.json();
//     return NextResponse.json(data, { status: res.status });
//   } catch (err) {
//     console.error("API proxy GET /projects error:", err);
//     const code = (err && (err as any).code) || (err && (err as any).cause && (err as any).cause.code);
//     if (code === "ECONNREFUSED") {
//       return NextResponse.json({ _fallback: true, message: `Backend unreachable at ${BACKEND}` }, { status: 503 });
//     }
//     return NextResponse.json({ error: "Failed to fetch projects" }, { status: 500 });
//   }
// }

// // POST /api/projects - Proxy to backend
// export async function POST(request: Request) {
//   try {
//     const body = await request.json();
//     const res = await fetch(`${BACKEND}/projects`, {
//       method: "POST",
//       headers: { "Content-Type": "application/json" },
//       body: JSON.stringify(body),
//     });
//     const data = await res.json();
//     return NextResponse.json(data, { status: res.status });
//   } catch (err) {
//     console.error("API proxy POST /projects error:", err);
//     const code = (err && (err as any).code) || (err && (err as any).cause && (err as any).cause.code);
//     if (code === "ECONNREFUSED") {
//       return NextResponse.json({ error: `Backend unreachable at ${BACKEND}` }, { status: 502 });
//     }
//     return NextResponse.json({ error: "Failed to save project" }, { status: 500 });
//   }
// }




import { NextResponse } from "next/server";

const BACKEND = process.env.BACKEND_URL || "http://localhost:5000";

/* ================== GET (PUBLIC) ================== */
export async function GET() {
  try {
    const res = await fetch(`${BACKEND}/projects`);
    const data = await res.json();
    return NextResponse.json(data, { status: res.status });
  } catch (err) {
    console.error("API proxy GET /projects error:", err);

    const code =
      (err && (err as any).code) ||
      (err && (err as any).cause && (err as any).cause.code);

    if (code === "ECONNREFUSED") {
      return NextResponse.json(
        { _fallback: true, message: `Backend unreachable at ${BACKEND}` },
        { status: 503 }
      );
    }

    return NextResponse.json(
      { error: "Failed to fetch projects" },
      { status: 500 }
    );
  }
}

/* ================== BLOCK POST ================== */
export async function POST() {
  return NextResponse.json(
    { error: "Not allowed" },
    { status: 403 }
  );
}

/* ================== BLOCK UPDATE ================== */
export async function PUT() {
  return NextResponse.json(
    { error: "Not allowed" },
    { status: 403 }
  );
}

/* ================== BLOCK DELETE ================== */
export async function DELETE() {
  return NextResponse.json(
    { error: "Not allowed" },
    { status: 403 }
  );
}