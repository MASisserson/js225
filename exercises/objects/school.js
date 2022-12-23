"use strict";

function createStudent(name, grade) {
  return {
    name,
    grade,
    courses: [],

    info() {
      console.log(`${name} is a ${grade} year student`);
    },

    listCourses() {
      return this.courses;
    },

    addCourse(course) {
      this.courses.push(course);
    },

    addNote(code, note) {
      const idx = this.courses.findIndex(course => course.code === code);
      const course = this.courses[idx];

      if (course.note) {
        course.note += `; ${note}`;
      } else {
        course.note = `${course.name}: ${note}`;
      }
    },

    updateNote(code, note) {
      const idx = this.courses.findIndex(course => course.code === code);
      this.courses[idx].note = `${this.courses[idx].name}: ${note}`;
    },

    viewNotes() {
      this.courses.filter(course => !!course.note).forEach(course => {
        console.log(course.note);
      });
    },

    getCourse(search) {
      // console.log(search);
      if (typeof search === 'number') {
        return this.courses.filter(course => course.code === search)[0];
      } else {
        return this.courses.filter(course => course.name === search)[0];
      }
    },
  };
}

function createSchool() {
  return {
    students: [],

    addStudent(name, grade) {
      const legalGrades = ['1st', '2nd', '3rd', '4th', '5th'];

      if (!legalGrades.includes(grade)) {
        console.log('Invalid Year');
        return;
      }

      this.students.push(createStudent(name, grade));
    },

    enrollStudent(studentName, course) {
      let student = this.getStudent(studentName);
      student.addCourse(course);
    },

    addGrade(studentName, code, grade) {
      let student = this.getStudent(studentName);
      let course = student.getCourse(code);
      course.grade = grade;
    },

    getReportCard(student) {
      student.courses.forEach(course => {
        if (course.grade) {
          console.log(`${course.name}: ${course.grade}`);
        } else {
          console.log(`${course.name}: In progress`);
        }
      });
    },

    courseReport(courseName) {
      let reportDisplay = [`=${courseName} Grades=`];
      let courseGrades = [];

      this.students.forEach(student => {
        // console.log(student);
        const grade = student.getCourse(courseName).grade;
        if (grade) {
          reportDisplay.push(`${student.name}: ${grade}`);
          courseGrades.push(grade);
        }
      });

      reportDisplay.push('---');

      if (courseGrades.length === 0) {
        console.log(undefined);
        return;
      }

      courseGrades.push(`Course Average: ${courseGrades.reduce((a, b) => a + b)}`);
    },

    getStudent(name) {
      return this.students.filter(student => student.name === name)[0];
    },
  };
}

let school = createSchool();

let foo = createStudent('foo', '3rd');
foo.addCourse({ name: 'Math', code: 101, grade: 95 });
foo.addCourse({ name: 'Advanced Math', code: 102, grade: 90 });
foo.addCourse({ name: 'Physics', code: 202 });

let bar = createStudent('bar', '1st');
bar.addCourse({ name: 'Math', code: 101, grade: 91 });

let qux = createStudent('qux', '2nd');
qux.addCourse({ name: 'Math', code: 101, grade: 93 });
qux.addCourse({ name: 'Advanced Math', code: 102, grade: 90 });

school.getReportCard(foo);
school.courseReport('Math');
school.courseReport('Advanced Math');
school.courseReport('Physics');
