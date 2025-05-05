"use client"

import { Html } from "@react-three/drei"

export default function LoadingSpinner() {
  return (
    <Html center>
      <div className="flex items-center justify-center">
        <div className="w-8 h-8 border-4 border-pink-300 border-t-pink-500 rounded-full animate-spin"></div>
      </div>
    </Html>
  )
}
