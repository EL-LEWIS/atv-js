/**
 * Calcula e exibe a média das notas de uma lista de alunos.
 * 
 * Cada aluno possui um nome e um array de notas. A função percorre
 * a lista e calcula a média das notas de cada aluno.
 * 
 * @param {Object[]} students
 * 
 * @param {string} students[].name 
 * 
 * 
 * @param {number[]} students[].point 
 * 
 * 
 * @return {void} 
 */

// Arrays separados para cada aluno
const student_one = { name: 'Marcos', point: [7.0, 2.0, 10.0] };
const student_two = { name: 'Lara', point: [9.0, 10.0, 6.0] };
const student_three = { name: 'Maximus', point: [7.0, 9.0, 6.5] };

// Criar um array de alunos para facilitar a iteração
const students = [student_one, student_two, student_three];

// Calcular e exibir a média de cada aluno
students.forEach((student) => {
    const points = student.point.reduce((total, point) => point + total, 0);
    const average = points / student.point.length;
    console.log(`${student.name} average: ${average.toFixed(2)}`);
});
