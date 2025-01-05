```javascript
//app/api/hello.js
export default function handler(req, res) {
  res.status(200).json({ text: 'Hello' })
}
```
Moving the API route to the `app` directory resolves the issue in Next.js 15.  Next.js 15's new app directory structure requires API routes to be placed within the `app` directory. The previous `pages/api` directory structure is not used by default.