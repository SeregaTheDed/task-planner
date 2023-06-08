package com.shtanko.todolist.dto;

public class TaskDTO {
    public int id;
    public int sortIndex;
    public String title;
    public String description;

    public TaskDTO(int id, int sortIndex, String title, String description) {
        this.id = id;
        this.sortIndex = sortIndex;
        this.title = title;
        this.description = description;
    }
}