package com.shtanko.todolist.controllers;

import com.shtanko.todolist.SQLiteManager;
import com.shtanko.todolist.dto.TaskDTO;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.ResponseBody;

import java.util.List;

@Controller
public class TaskController {

    @GetMapping("/task")
    @ResponseBody
    public List<TaskDTO> getAllTasks() {
        SQLiteManager sqLiteManager = new SQLiteManager();
        return sqLiteManager.getAllTasks();
    }
}

