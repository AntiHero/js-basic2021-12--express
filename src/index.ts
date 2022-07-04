import app from './app';
import connectToMongoDB from './utils/connectToMongodDb';

const PORT = 9090;

app.listen(PORT, async () => {
  await connectToMongoDB();
  console.log('Server is listening at http://localhost:%s', PORT);
});
