import Image from "next/image";
import { lazy, Suspense } from "react";

const Hero = lazy(() => import('@/app/components/Hero').then( module => {
  return {default: module.default}
}))

const Schedule = lazy(() => import('@/app/components/Schedule').then( module => {
  return {default: module.default}
}))

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24 pt-0 gap-20">
      <Suspense fallback={<p>Loading...</p>}>
        <Hero/>
      </Suspense>
      <hr/>
      <Suspense fallback={<p>Loading...</p>}>
        <Schedule/>
      </Suspense>
    </main>
  );
}
