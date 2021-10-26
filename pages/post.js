import React from 'react'
import styled from 'styled-components'
import Layout from './layouts/Main'
import { getPost } from './api/posts'

const Wrapper = styled.div`
  // padding: 3rem;
  // max-width: 750px;
  // margin: 0 auto;
  // @media (max-width: 750px) {
  //   width: 100%;
  //   padding: 1rem;
  // }
  // h1 {
  //   color: #222;
  //   font-weight: bold;
  //   font-size: 1.75rem;
  //   line-height: 35px;
  //   font-family: "PT Sans", sans-serif;
  //   text-transform: capitalize;
  //   margin: 0;
  // }
  // p {
  //   line-height: 28px;
  //   color: #666;
  //   font-family: "PT Sans", sans-serif;
  // }
`

const PostPage = ({ post }) =>
  <Layout>
    <Wrapper>
    <div className="container post-container">
      <div className="square">
        {/* <img src="https://images.unsplash.com/photo-1504610926078-a1611febcad3?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=e1c8fe0c9197d66232511525bfd1cc82&auto=format&fit=crop&w=1100&q=80" className="mask" /> */}
        <div className="h1">{post.title}</div>
        <p>{post.body}</p>
        {/* <div> <Link className="button" route='post' params={{ slug: post.title }}>Read More</Link></div> */}
      </div>
    </div>
    </Wrapper>
  </Layout>

PostPage.getInitialProps = async ({ query }) => {
  const res = await getPost(query.slug)
  const json = await res.json()
  return { post: json[0] }
}

export default PostPage