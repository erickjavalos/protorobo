// Add new posts by prepending a new object to this array.
// Most recent post should be first.
//
// Status options:  'In Progress' | 'Completed' | 'Tutorial'
// category:        any string label, e.g. 'Drone', 'Roomba', 'Web', 'Electronics'
// cover:           path relative to /public, e.g. '/images/posts/my-photo.jpg' (or '' for none)
// body:            array of content blocks — see types below
//
// Block types:
//   { type: 'text',    content: 'paragraph string' }
//   { type: 'heading', content: 'section heading string' }
//   { type: 'image',   src: '/images/posts/my-photo.jpg', caption: 'optional caption' }
//   { type: 'code',    language: 'python', content: 'code string' }
//   { type: 'list',    items: ['item 1', 'item 2'] }

const posts = []

export default posts
