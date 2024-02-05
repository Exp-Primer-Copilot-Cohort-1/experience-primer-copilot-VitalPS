// Create web server
// 1. Load the express module
const express = require('express');
// 2. Create a new web server
const app = express();
// 3. Define a route
app.get('/', (req, res) => {
  res.send('Hello, Express.js');
});
// 4. Start the server
app.listen(3000, () => {
  console.log('Listening on port 3000');
});
// 5. Add a new route
app.get('/comments', (req, res) => {
  res.send('Comments');
});
// 6. Respond with a JSON array
app.get('/comments', (req, res) => {
  res.json([{
    id: 1,
    username: 'alice',
    content: 'I love your blog!'
  }, {
    id: 2,
    username: 'bob',
    content: 'Good post!'
  }]);
});
// 7. Add a new route
app.get('/comments/:id', (req, res) => {
  res.send('Comments: ' + req.params.id);
});
// 8. Respond with a JSON object
app.get('/comments/:id', (req, res) => {
  res.json({
    id: req.params.id,
    username: 'Alice',
    content: 'I love your blog!'
  });
});
// 9. Add a new route
app.post('/comments', (req, res) => {
  res.send('Creating a comment');
});
// 10. Add a new route
app.put('/comments/:id', (req, res) => {
  res.send('Updating a comment: ' + req.params.id);
});
// 11. Add a new route
app.delete('/comments/:id', (req, res) => {
  res.send('Deleting a comment: ' + req.params.id);
});
// 12. Add a new route
app.all('/comments', (req, res) => {
  res.send(405, 'Method Not Allowed');
});
// 13. Add a new route
app.all('/comments/:id', (req, res) => {
  res.send(405, 'Method Not Allowed');
});
// 14. Add a new route
app.use((req, res) => {
  res.send(404, 'Not Found');
});
// 15. Add a new route
app.use((err, req, res,