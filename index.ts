import * as fs from 'fs';

interface Person {
  id: number;
  name: string;
  age: number;
}

// อ่านไฟล์ JSON
const readJsonFile = (filePath: string): Person[] => {
  const rawData = fs.readFileSync(filePath, 'utf-8');
  return JSON.parse(rawData) as Person[];
};

// ฟังก์ชันลูปข้อมูล
const processJsonData = (data: Person[]): void => {
  data.forEach(data => {
    console.log(`name: ${data.name}, date: ${data.name}, Age: ${data.age}`);
  });
};

// เรียกใช้งาน
const filePath = 'json.json'; // ระบุพาธไฟล์ JSON
const filePathtxt = 'case.txt'; // ระบุพาธไฟล์ txt
const jsonData = readJsonFile(filePath);
processJsonData(jsonData);