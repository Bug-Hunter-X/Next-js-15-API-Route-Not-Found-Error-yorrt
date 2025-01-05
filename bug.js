```javascript
//pages/api/hello.js
export default function handler(req, res) {
  res.status(200).json({ text: 'Hello' })
}
```
This API route works correctly in Next.js 14 but produces a runtime error in Next.js 15: `Error: Route /api/hello is not found`