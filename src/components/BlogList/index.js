import {Component} from 'react'
import './index.css'

class BlogList extends Component {
  state = {blogData: []}

  componentDidMount() {
    this.getBlogData()
  }

  getBlogData = async () => {
    const response = await fetch('https://apis.ccbp.in/blogs')
    const data = await response.json()
     this.setState({blogData: data.blogs}) 
    console.log(data)
  }

  render() {
    const {blogData} = this.state
    return <div className="blog-list-container">
        {blogData.map(blog => (
          <div key={blog.id} className="blog-item">
            <h2>{blog.title}</h2>
            <p>{blog.content}</p>
          </div>
        ))}
      </div>
  }
}

export default BlogList
