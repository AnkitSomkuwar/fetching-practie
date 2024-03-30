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
    console.log(data)
  }

  render() {
    const {blogData} = this.state
    return <div className="blog-list-container"></div>
  }
}

export default BlogList
