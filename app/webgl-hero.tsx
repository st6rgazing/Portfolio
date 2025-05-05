import React, { Suspense } from "react"
import { ErrorBoundary } from "./error-boundary"

async function loadHero() {
  const { WebGLHero } = await import("../components/webgl-hero")
  return WebGLHero
}

const Hero = React.lazy(loadHero)

export default function WebGLHeroWrapper() {
  return (
    <ErrorBoundary fallback={<div>Something went wrong loading the hero.</div>}>
      <Suspense fallback={<div>Loading...</div>}>
        <Hero />
      </Suspense>
    </ErrorBoundary>
  )
}
