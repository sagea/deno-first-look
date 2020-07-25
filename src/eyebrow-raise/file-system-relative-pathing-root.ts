import { exists } from 'fs';
import { assertEquals } from 'asserts';

/**
 * Summary:
 * Based on the behavior of modules and pathing in comand line. I would assume that '.' and './'
 * represent the current folder: <project>/src/eyebrow-raise. In reality it is <project>
 * 
 * As far as I can tell... calling exists('./') es equivalent to fs.exists(process.cwd() + './')
 */



try {
  assertEquals(await exists('./file-system-relative-pathing-root.ts'), true) // This fails
  console.log('Never makes it here');
} catch (error) {
  console.error('🤨', error);
}

 /**
  * What actually works
  */

assertEquals(await exists('./src/eyebrow-raise/file-system-relative-pathing-root.ts'), true) 
console.log('This works');
 
 
