package com.aguare.backendapi.Entitys;

public class Alert {
    private String message;
    private String title;
    private String type;
    private boolean show;

    public Alert(String message, String title, String type, boolean show) {
        this.message = message;
        this.title = title;
        this.type = type;
        this.show = show;
    }

    public String getMessage() {
        return message;
    }

    public void setMessage(String message) {
        this.message = message;
    }

    public String getTitle() {
        return title;
    }

    public void setTitle(String title) {
        this.title = title;
    }

    public String getType() {
        return type;
    }

    public void setType(String type) {
        this.type = type;
    }

    public boolean isShow() {
        return show;
    }

    public void setShow(boolean show) {
        this.show = show;
    }
}
