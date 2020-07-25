import { exists } from 'fs';

exists('./src/writing-files.ts')
  .then(console.log)
  .catch(console.error)
