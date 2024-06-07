import React, { lazy, Suspense } from 'react'

const GoogleMap = lazy(() => import('@/app/components/GoogleMap').then( module => {
  return {default: module.default}
}))


export default function Location() {
  return (
    <div>
      <Suspense>
        <GoogleMap/>
      </Suspense>
      
    </div>
  )
}
