package com.eschool.greetgo;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.jdbc.core.JdbcTemplate;

import java.sql.*;

@SpringBootApplication
public class GreetgoApplication {

	@Autowired
	private JdbcTemplate jdbcTemplate;
	static final String JDBC_DRIVER = "org.postgresql.Driver";
	static final String URL = "jdbc:postgresql://127.0.0.1:5432/";
	static final String USER = "postgres";
	static final String PASSWORD = "1899";

	public static void main(String[] args) throws ClassNotFoundException, SQLException {
		SpringApplication.run(GreetgoApplication.class, args);

		Connection conn = null;
		Statement statement = null;
		boolean flag = false;

		try {
			Class.forName(JDBC_DRIVER);
			try {
				conn = DriverManager.getConnection("jdbc:postgresql://localhost:5432/e_school", USER, PASSWORD);
				flag = true;

			} catch (Exception se) {
				if(!flag) {
					conn = DriverManager.getConnection(URL, USER, PASSWORD);

					statement = conn.createStatement();

					String sql = "CREATE DATABASE e_school";
					statement.executeUpdate(sql);


					conn = DriverManager.getConnection("jdbc:postgresql://localhost:5432/e_school", USER, PASSWORD);

					statement = conn.createStatement();
					String sqlTable = "CREATE TABLE students (\n" +
							"\tid serial PRIMARY KEY,\n" +
							"\tfirstname varchar(100) NOT NULL,\n" +
							"\tlastname varchar(100) NOT NULL,\n" +
							"\tyearsOld int NOT NULL,\n" +
							"\tgrade varchar(100) NOT NULL\n" +
							")";
					statement.executeUpdate(sqlTable);

					statement = conn.createStatement();
					String sqlInsert = "INSERT INTO students(firstname, lastname, yearsOld, grade)\n" +
							"VALUES ('Дармен', 'Затов', 16, '10С'), ('Алишер', 'Баяндинов', 15, '10A');";
					statement.executeUpdate(sqlInsert);
				}
			}
		}


		finally {
			try {
				if (statement != null)
					statement.close();
			} catch (SQLException se2) {
				se2.printStackTrace();
			}
			try {
				if (conn != null)
					conn.close();
			} catch (SQLException se) {
				se.printStackTrace();
			}
		}

	}

	}



