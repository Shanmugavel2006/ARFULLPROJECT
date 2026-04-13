// import { NextResponse } from "next/server";

// const BACKEND = process.env.BACKEND_URL || "http://localhost:5000";

// export async function GET() {
//   try {
//     const res = await fetch(`${BACKEND}/projects`);
//     const data = await res.json();
//     return NextResponse.json(data, { status: res.status });
//   } catch (err) {
//     console.error("API proxy GET /projects error:", err);
//     const code = (err && (err as any).code) || (err && (err as any).cause && (err as any).cause.code);
//     if (code === "ECONNREFUSED") {
//       // Backend unreachable — do NOT return fake project data that appears in admin/portfolio.
//       // Return a clear fallback signal and message only.
//       return NextResponse.json({ _fallback: true, message: `Backend unreachable at ${BACKEND}` }, { status: 503 });
//     }
//     return NextResponse.json({ error: "Failed to fetch projects" }, { status: 500 });
//   }
// }

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

/* ================== ROLE CHECK ================== */
function isAdmin(request: Request) {
  const role = request.headers.get("role");
  return role === "admin";
}

/* ================== GET (ADMIN CAN VIEW) ================== */
export async function GET() {
  try {
    const res = await fetch(`${BACKEND}/projects`);
    const data = await res.json();
    return NextResponse.json(data, { status: res.status });
  } catch (err) {
    console.error("API proxy GET /admin/projects error:", err);

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

/* ================== POST (ADMIN ONLY) ================== */
export async function POST(request: Request) {
  if (!isAdmin(request)) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  try {
    const body = await request.json();

    const res = await fetch(`${BACKEND}/projects`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(body),
    });

    const data = await res.json();
    return NextResponse.json(data, { status: res.status });
  } catch (err) {
    console.error("API proxy POST /admin/projects error:", err);

    const code =
      (err && (err as any).code) ||
      (err && (err as any).cause && (err as any).cause.code);

    if (code === "ECONNREFUSED") {
      return NextResponse.json(
        { error: `Backend unreachable at ${BACKEND}` },
        { status: 502 }
      );
    }

    return NextResponse.json(
      { error: "Failed to save project" },
      { status: 500 }
    );
  }
}

/* ================== UPDATE (ADMIN ONLY) ================== */
export async function PUT(request: Request) {
  if (!isAdmin(request)) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  try {
    const body = await request.json();

    const res = await fetch(`${BACKEND}/projects/${body.id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(body),
    });

    const data = await res.json();
    return NextResponse.json(data, { status: res.status });
  } catch (err) {
    console.error("API proxy PUT /admin/projects error:", err);
    return NextResponse.json(
      { error: "Failed to update project" },
      { status: 500 }
    );
  }
}

/* ================== DELETE (ADMIN ONLY) ================== */
export async function DELETE(request: Request) {
  if (!isAdmin(request)) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  try {
    const { id } = await request.json();

    const res = await fetch(`${BACKEND}/projects/${id}`, {
      method: "DELETE",
    });

    const data = await res.json();
    return NextResponse.json(data, { status: res.status });
  } catch (err) {
    console.error("API proxy DELETE /admin/projects error:", err);
    return NextResponse.json(
      { error: "Failed to delete project" },
      { status: 500 }
    );
  }
}