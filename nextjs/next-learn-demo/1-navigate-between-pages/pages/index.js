import Link from 'next/link'

export default function Index() {
  return (
    <div>
      <Link href="/about">
        {/* Add props to Link's children when needed like title below */}
        <a title="About Page">About Page</a>
      </Link>
      <p>Hello Next.js</p>
    </div>
  )
}
