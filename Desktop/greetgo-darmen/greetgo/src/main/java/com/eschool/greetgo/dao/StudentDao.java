package com.eschool.greetgo.dao;

import com.eschool.greetgo.models.Student;
import org.apache.ibatis.annotations.*;
import org.springframework.context.annotation.Bean;

import java.util.List;

@Mapper
public interface StudentDao {
    @Select("select * from students where id = 1")
    Student getStudent();


    @Select("select * from students")
    List<Student> getAllStudents();


    @Insert("Insert into students (lastname,firstname,yearsOld,grade) Values (#{lastname} , " +
            "                                                                 #{firstname} , " +
            "                                                                 ${yearsOld}," +
            "                                                                 #{grade})")
    void addStudent(@Param(value = "lastname") String lastname ,  @Param(value = "firstname") String firstname ,
                    @Param(value = "yearsOld") int yearsOld , @Param(value = "grade") String grade);

    @Delete("delete from students where id = ${id}")
    void delete(@Param(value = "id") int id);
}
