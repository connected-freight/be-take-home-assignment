import randomstring from 'randomstring';
import { AssignmentScores, CourseScores, StudentScore } from '../models/input';

function generateStrings(count: number): string[] {
  const strings: string[] = [];
  for (let i = 0; i < count; i++) {
    strings.push(randomstring.generate());
  }
  return strings;
}

function generateStudentScores(studentNames: string[], maxPossibleScore: number): StudentScore[] {
  return studentNames.map((studentName) => {
    return { studentName, score: Math.random() * maxPossibleScore };
  });
}

function generateAssignmentsWithoutScores(
  assignmentNames: string[],
  maxPossibleScore: number
): AssignmentScores[] {
  const perAssignmentWeightInPercent = 100 / assignmentNames.length;

  return assignmentNames.map((assignmentName) => {
    return {
      assignmentName,
      maxPossibleScore,
      weightInPercent: perAssignmentWeightInPercent,
      studentScores: [],
    };
  });
}

export function generateCourseScores(
  courseName: string,
  numberOfAssignments: number,
  numberOfStudents: number
): CourseScores {
  const assignmentNames = generateStrings(numberOfAssignments);
  const studentNames = generateStrings(numberOfStudents);
  const assignments = generateAssignmentsWithoutScores(assignmentNames, 10);
  assignments.forEach(
    (assignment) =>
      (assignment.studentScores = generateStudentScores(studentNames, assignment.maxPossibleScore))
  );
  return { courseName, assignmentScores: assignments };
}
