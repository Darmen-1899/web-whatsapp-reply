package com.eschool.greetgo;

import com.eschool.greetgo.daoTest.StudentDaoTest;
import com.eschool.greetgo.registerImpl.MainRegisterImpl;
import org.assertj.core.api.AssertionsForInterfaceTypes;
import org.checkerframework.checker.units.qual.A;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;

import java.util.Random;

@SpringBootTest
class GreetgoApplicationTests {

	@Autowired
	StudentDaoTest studentDaoTest;

	@Autowired
	MainRegisterImpl mainRegister;

	@Test
	void checkStudent() {
		studentDaoTest.clear();

		var firstname = "Zatov";
		var lastname = "Darmen";
		var yearsOld = 21;
		var grade = "10A";

		studentDaoTest.addStudent(lastname, firstname, yearsOld, grade);

		var studentsDb = mainRegister.getStudents();

		var students = studentDaoTest.getStudents();

		AssertionsForInterfaceTypes.assertThat(studentsDb).hasSize(1);
		AssertionsForInterfaceTypes.assertThat(studentsDb.get(0).lastname).isEqualTo(students.get(0).lastname);
		AssertionsForInterfaceTypes.assertThat(studentsDb.get(0).firstname).isEqualTo(students.get(0).firstname);
		AssertionsForInterfaceTypes.assertThat(studentsDb.get(0).yearsOld).isEqualTo(students.get(0).yearsOld);
		AssertionsForInterfaceTypes.assertThat(studentsDb.get(0).grade).isEqualTo(students.get(0).grade);
	}

}
