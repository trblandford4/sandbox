import Link from 'next/link'

import Layout from '../components/MyLayout.js'

const PostLink = ({ title }) => (
  <li>
    <Link href={`/post?title=${title}`}>
      <a>{title}</a>
    </Link>
  </li>
)

export default function Index() {
  return (
    <Layout>
      <h1>My Blog</h1>
      <ul>
        <PostLink title={'Hello Next.js'} />
        <PostLink title={'Learn Next.js is awesome'} />
        <PostLink title={'Deploy apps with Zeit'} />
      </ul>
    </Layout>
  )
}
