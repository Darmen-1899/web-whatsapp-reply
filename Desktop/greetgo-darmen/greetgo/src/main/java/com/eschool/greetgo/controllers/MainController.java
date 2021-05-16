package com.eschool.greetgo.controllers;

import com.eschool.greetgo.dao.StudentDao;
import com.eschool.greetgo.models.Student;

import com.eschool.greetgo.registerImpl.MainRegisterImpl;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@CrossOrigin(origins = "*")
@RequestMapping("/")
@RestController
public class MainController {

    @Autowired
    StudentDao studentDao;

    @Autowired
    MainRegisterImpl mainRegister;

    @GetMapping("/students")
    public ResponseEntity<List<Student>> getStudents() {
        List<Student> allStudents = mainRegister.getStudents();
        return ResponseEntity.ok().body(allStudents);
    }

    @PostMapping("/add-student")
    public ResponseEntity<?> addStudent(@RequestBody Student student)
    {
        mainRegister.addStudents(student);
        return ResponseEntity.ok().body("Student " + student.firstname + " " + student.lastname + " added");
    }

    @PostMapping("/delete-student")
    public ResponseEntity<?> deleteStudent(@RequestBody int id)
    {
        mainRegister.deleteStudent(id);
        return ResponseEntity.ok().body("Student deleted");
    }


}