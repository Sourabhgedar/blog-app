import { Suspense } from "react"
import { Sources } from './components/Sources'
import dynamic from 'next/dynamic'
import { Typography } from "@mui/material"
const LayoutMessage = dynamic(() => import('../../app/components/LayoutMessage'), { ssr: false })

export default async function Index() {
  return (
    <>
      <Suspense fallback={
        <LayoutMessage>
          <Typography>
            Loading...
          </Typography>
        </LayoutMessage>
      }>
        <Sources />
      </Suspense>
    </>
  )
}

