import React from 'react'
export const dynamic = 'force-dynamic'
// 'auto' | 'force-dynamic' | 'error' | 'force-static'

export default async function AboutPage() {
    await new Promise((resolve)=>setTimeout(resolve,4000))

    // throw new Error("Something went wrong")
  return (
    <div >
        <h1>About page</h1></div>
  )
}
