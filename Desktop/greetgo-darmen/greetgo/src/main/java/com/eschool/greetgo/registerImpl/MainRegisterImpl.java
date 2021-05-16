package com.eschool.greetgo.registerImpl;

import com.eschool.greetgo.dao.StudentDao;
import com.eschool.greetgo.models.Student;
import lombok.RequiredArgsConstructor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;
import org.springframework.web.bind.annotation.RequestBody;

import java.util.List;

@Service
@RequiredArgsConstructor
public class MainRegisterImpl{

    @Autowired
    StudentDao studentDao;


    public List<Student> getStudents() {
        return studentDao.getAllStudents();
    }

    public void addStudents(Student student) {
        studentDao.addStudent(student.lastname, student.firstname,student.yearsOld,student.grade);
    }

    public void deleteStudent(int id)
    {

        studentDao.delete(id);
    }
}
