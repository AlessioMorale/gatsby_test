import React, { Component } from "react"
import { Link } from "gatsby"
import Tags from "./tag"

export default props => (
  <article
    className={`post-card ${props.node.frontmatter.important &&
      props.node.frontmatter.important === true &&
      `post-card-large`} ${props.postClass} no-image`}
    style={
      props.node.frontmatter.thumbnail && {
        backgroundImage: `url(${props.node.frontmatter.thumbnail.childImageSharp.fluid.src})`,
      }
    }
  >
    <ContentNoImage props={props} />
  </article>
)

class ContentNoImage extends Component {
  render() {
    const { props } = this.props
    return (
      <div className="post-card-content">
        <div>
          <Tags tags={props.node.frontmatter.tags} />
        </div>
        <div>
          <Link to={props.node.fields.slug} className="post-card-link">
            <h2 className="post-card-title">
              {props.node.frontmatter.title || props.node.fields.slug}
            </h2>
          </Link>
        </div>
        <div className="post-card-date">{props.node.frontmatter.date}</div>
        <div className="post-card-body">
          {props.node.frontmatter.description || props.node.excerpt}
        </div>
        <div>
          <Link
            to={props.node.fields.slug}
            className="post-card-link post-card-readmore"
          >
            {props.node.frontmatter.description || props.node.excerpt
              ? "Read more"
              : null}
          </Link>
        </div>
      </div>
    )
  }
}
