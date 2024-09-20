const fs = require('fs');

function countStudents(path) {
  return new Promise((resolve, reject) => {
    fs.readFile(path, 'utf-8', (err, data) => {
      if (err) {
        reject(new Error('Cannot load the database')); // provides a stack trace for err
        return;
      }
      const lines = data.split('\n').filter((line) => line.trim() !== '');
      const stidents = lines.splice(1);
      const numOfStudent = stidents.length;

      console.log(`Number of students: ${numOfStudent}`);

      const fields = {};
      stidents.forEach((student) => {
        const [firstname,,, field] = student.split(',');
        if (!fields[field]) {
          fields[field] = [];
        }
        fields[field].push(firstname);
      });

      for (const [field, names] of Object.entries(fields)) {
        console.log(`Number of students in ${field}: ${names.length}. List: ${names.join(', ')}`);
      }

      resolve();
    });
  });
}

module.exports = countStudents;
