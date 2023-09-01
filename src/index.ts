import express from 'express';
import swaggerUI from 'swagger-ui-express';
import swaggerJson from './swagger.json';
import { alunoRoute } from './routes/AlunoRoute';
import { disciplinaRoute } from './routes/DisciplinaRoute';
import { turmaRoute } from './routes/TurmaRoute';

const app = express();
const port = 3000;

app.use(express.json());

app.use(
  express.urlencoded({
    extended: true,
  })
);

app.use('/docs', swaggerUI.serve, swaggerUI.setup(swaggerJson));

app.use('/aluno', alunoRoute);

app.use('/disciplina', disciplinaRoute);

app.use('/turma', turmaRoute);

app.listen(port, () => console.log(`API listening on port ${port}!`));
