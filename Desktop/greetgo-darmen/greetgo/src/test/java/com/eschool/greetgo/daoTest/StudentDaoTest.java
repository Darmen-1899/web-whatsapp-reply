package com.eschool.greetgo.daoTest;

import com.eschool.greetgo.models.Student;
import org.apache.ibatis.annotations.*;

import java.util.List;

@Mapper
public interface StudentDaoTest {
    @Insert("Insert into students (lastname,firstname,yearsOld,grade) Values (#{lastname} , " +
            "                                                                 #{firstname} , " +
            "                                                                 ${yearsOld}," +
            "                                                                 #{grade})")
    void addStudent(@Param(value = "lastname") String lastname ,  @Param(value = "firstname") String firstname ,
                    @Param(value = "yearsOld") int yearsOld , @Param(value = "grade") String grade);

    @Select("select * from students")
    List<Student> getStudents();

    @Select("truncate table students cascade")
    void clear();
}
