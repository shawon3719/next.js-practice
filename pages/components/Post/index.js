import React from 'react'
import { Link } from '../../../routes'
import Wrapper from './Wrapper'

const PostItem = ({ post }) => (
  <Wrapper>
    {/* <Link route='post' params={{ slug: post.title }}>
      <a>
        <h3>{post.title}</h3>
        <p>{post.body}</p>
      </a>
    </Link> */}

<div className="container post-container">
  <div className="square">
    {/* <img width="60%" src="https://images.unsplash.com/photo-1504610926078-a1611febcad3?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=e1c8fe0c9197d66232511525bfd1cc82&auto=format&fit=crop&w=1100&q=80" className="mask" /> */}
    <div className="h1">{post.title}</div>
    <p>{post.body}</p>
    <div ><span className="button-more" ><Link route='post' params={{ slug: post.title }}>Read More</Link></span></div>
  </div>
</div>

      
    
  </Wrapper>
)

export default PostItem