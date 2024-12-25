"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var fs = require("fs");

// อ่านไฟล์ JSON
var readJsonFile = function (filePath) {
    var rawData = fs.readFileSync(filePath, 'utf-8');
    return JSON.parse(rawData);
};

// ฟังก์ชันลูปข้อมูลและเพิ่มลงไฟล์ txt
var processJsonData = function (data, outputFilePath) {
    data.forEach(function (person) {
        // สร้างข้อความที่จะเพิ่มลงในไฟล์
        var line = person.created_at +','+ person.name + ','+person.description+','+person.contact_id.display_name+','+person.short_id+'\n';

        // เพิ่มข้อความลงในไฟล์ txt (ถ้าไฟล์ยังไม่มีก็จะสร้างใหม่)
        fs.appendFileSync(outputFilePath, line, 'utf-8');
    });
};

// เรียกใช้งาน
var filePath = 'komin.json'; // ระบุพาธไฟล์ JSON
var outputFilePath = 'komin.txt'; // ไฟล์ output txt ที่จะบันทึกข้อมูล
var jsonData = readJsonFile(filePath);
processJsonData(jsonData, outputFilePath);
