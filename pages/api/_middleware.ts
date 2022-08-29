import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';
import { getIronSession, IronSessionData } from "iron-session/edge";
import configs from '../../constants/config';


export async function middleware(req: NextRequest) {
  const res = NextResponse.next();
  const ironSession: IronSessionData = await getIronSession(
    req,
    res,
    {
      password: configs.IRON_SESSIONS_PASSWORD,
      cookieName: "almargen_app",
      cookieOptions: {
        secure: false,
      },
    }
  );

  if (req.nextUrl.pathname.startsWith('/login') || req.nextUrl.pathname.startsWith('/oauthcallback')) {
    return NextResponse.next();
  }

  if (!ironSession.user) {
    return NextResponse.json({ message: 'Auth required' }, { status: 401 });
  }
}