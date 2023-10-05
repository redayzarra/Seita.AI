import Link from 'next/link'
import React from 'react'

const InstagramPage = () => {
  return (
    <div>
      <h1>Instagram</h1>
      <Link href="/instagram/insights" className="font-bold">Insights</Link>
    </div>
  )
}

export default InstagramPage