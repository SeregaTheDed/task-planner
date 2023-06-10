package com.shtanko.todolist.dto;

import com.fasterxml.jackson.databind.annotation.JsonSerialize;

import java.io.Serializable;

public class TaskDTO implements Serializable {
    private Integer id;
    private Integer sortIndex;
    private String title;
    private String description;

    public TaskDTO(Integer id, Integer sortIndex, String title, String description) {
        this.id = id;
        this.sortIndex = sortIndex;
        this.title = title;
        this.description = description;
    }

    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
    }

    public int getSortIndex() {
        return sortIndex;
    }

    public void setSortIndex(int sortIndex) {
        this.sortIndex = sortIndex;
    }

    public String getTitle() {
        return title;
    }

    public void setTitle(String title) {
        this.title = title;
    }

    public String getDescription() {
        return description;
    }

    public void setDescription(String description) {
        this.description = description;
    }
}