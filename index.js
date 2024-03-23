import express  from 'express';
import http  from 'http';
import bodyParser  from 'body-parser';
import cookieParser  from 'cookie-parser';
import compression  from 'compression';
import cors  from 'cors';
import dotenv  from 'dotenv';
import path from 'path';
import router  from './router/index.js';
import mongoose  from 'mongoose';

dotenv.config();

const DB = process.env.DATABASE;

const app = express();

app.use(cors({
  credentials: true,
}));
const __dirname = path.resolve();
const static_path =path.join(__dirname,"./public");
app.use(express.static(static_path));
app.use(express.urlencoded({extended:false}));

app.use(compression());
app.use(cookieParser());
app.use(bodyParser.json());

const server = http.createServer(app);

server.listen(3000, () => {
  console.log('Server running on 3000');
});



mongoose.Promise = Promise;
mongoose.connect("mongodb+srv://Doctors123:yashmishra@cluster0.7n59hfw.mongodb.net/").then(() => {
  console.log('connected successfully');
}).catch((error) => console.log('not connected'));
// mongoose.connection.on('error', (error: Error) => console.log(error));

app.use('/', router());