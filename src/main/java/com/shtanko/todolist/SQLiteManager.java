package com.shtanko.todolist;

import com.shtanko.todolist.dto.TaskDTO;

import java.sql.*;
import java.util.ArrayList;
import java.util.List;

public class SQLiteManager {
    private static final String DB_URL = "jdbc:h2:mem:test;DB_CLOSE_DELAY=-1";

    static  {
        try (Connection connection = DriverManager.getConnection(DB_URL);
             Statement statement = connection.createStatement()) {
            String addTasksTableSql = "CREATE TABLE IF NOT EXISTS " +
                    "tasks (" +
                    "id INTEGER PRIMARY KEY AUTOINCREMENT, " +
                    "sort_index INTEGER, " +
                    "title TEXT, " +
                    "description TEXT)";
            statement.execute(addTasksTableSql);
            String insertDataSql = "INSERT INTO tasks (sort_index, title, description) VALUES " +
                    "(1, 'Записаться к врачу', 'Прийти в кабинет 8 по адресу ул. Пушкина и записаться к врачу'), " +
                    "(2, 'Пройти собеседование', 'Зайти в специальное приложение для собеседования и пройти его'), " +
                    "(3, 'Подготовиться к экзамену', 'Очень интересная мысль меня посетила - подготовиться к экзамену. Но еще много времени для подготовки - до осени')";
            statement.execute(insertDataSql);
        } catch (SQLException e) {
            System.err.println("Error sql: " + e.getMessage());
        }
    }

    public List<TaskDTO> getAllTasks() {
        List<TaskDTO> tasks = new ArrayList<>();

        try (Connection connection = DriverManager.getConnection(DB_URL);
             Statement statement = connection.createStatement()) {
            ResultSet resultSet = statement.executeQuery("SELECT * FROM tasks");
            while (resultSet.next()) {
                int id = resultSet.getInt("id");
                int sortIndex = resultSet.getInt("sort_index");
                String title = resultSet.getString("title");
                String description = resultSet.getString("description");

                TaskDTO task = new TaskDTO(id, sortIndex, title, description);
                tasks.add(task);
            }
        } catch (SQLException e) {
            System.err.println("Error retrieving tasks: " + e.getMessage());
        }

        return tasks;
    }
}
