import { lazy, Suspense } from "react";


const Hero = lazy(() => import('@/app/components/Hero').then( module => {
  return {default: module.default}
}))

const Schedule = lazy(() => import('@/app/components/Schedule').then( module => {
  return {default: module.default}
}))

const Location = lazy(() => import('@/app/components/Location').then( module => {
  return {default: module.default}
}))

const Contact = lazy(() => import('@/app/components/Contact').then( module => {
  return {default: module.default}
}))

const About = lazy(() => import('@/app/components/About').then( module => {
  return {default: module.default}
}))

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24 pt-0 gap-44">
      <Suspense fallback={<p>Loading...</p>}>
        <Hero/>
      </Suspense>
      <Suspense fallback={<p>Loading...</p>}>
        <Schedule/>
      </Suspense>
      <Suspense fallback={<p>Loading...</p>}>
        <Location/>
      </Suspense>
      <Suspense fallback={<p>Loading...</p>}>
        <Contact/>
      </Suspense>
      <Suspense fallback={<p>Loading...</p>}>
        <About/>
      </Suspense>
    </main>
  );
}
