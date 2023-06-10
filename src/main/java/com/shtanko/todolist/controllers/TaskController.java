package com.shtanko.todolist.controllers;

import com.shtanko.todolist.SQLiteManager;
import com.shtanko.todolist.dto.TaskDTO;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;

import java.util.ArrayList;
import java.util.List;

@RestController
@RequestMapping("/task")
public class TaskController {

    @GetMapping("/getAllTasks")
    @ResponseBody
    public List<TaskDTO> getAllTasks() {
        SQLiteManager sqLiteManager = new SQLiteManager();
        return sqLiteManager.getAllTasks();
    }

    @PostMapping("/setAllTasks")
    public void setAllTasks(@RequestBody ArrayList<TaskDTO> listFromFrontend) {
        SQLiteManager sqLiteManager = new SQLiteManager();
        sqLiteManager.setAllTasks(listFromFrontend);
    }


}

