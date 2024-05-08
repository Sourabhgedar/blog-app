import { NextRequest, NextResponse } from 'next/server'
const protectedRoutes = ['/sources' , '/dashboard']
const publicRoutes = ['/']
export default async function middleware(req: NextRequest) {
  const path = req.nextUrl.pathname
  const isProtectedRoute = protectedRoutes.includes(path)
  const isPublicRoute = publicRoutes.includes(path)
  const isAuthenticated = true
  if (isProtectedRoute && !isAuthenticated) {
    return NextResponse.redirect(new URL('/', req.nextUrl))
  }
  if (
    isPublicRoute && // is public && authenticated then navigate to private scope
    isAuthenticated &&
    // !req.nextUrl.pathname.startsWith('/sources')
    !protectedRoutes.includes(path)
  ) {
    return NextResponse.redirect(new URL('/sources', req.nextUrl))
  }
  return NextResponse.next()
}