const express = require('express');
const app = express();

// Define your endpoint
app.get('/', (req, res) => {
  res.send('Hello, World!');
});

// Export app separately for testing
if (require.main === module) {
  const PORT = 5120;
  app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
  });
}

module.exports = app; // Export app for testing
