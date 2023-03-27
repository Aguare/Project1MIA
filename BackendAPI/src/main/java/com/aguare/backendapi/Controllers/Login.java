package com.aguare.backendapi.Controllers;

import com.aguare.backendapi.DAO.UserDAO;
import com.aguare.backendapi.Entitys.User;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.Optional;

@RestController
@Slf4j
@CrossOrigin(origins = "http://localhost:4200")
public class Login {

    @Autowired
    private UserDAO user;

    @PostMapping("/Login")
    public User getUser(@RequestBody User in){
        Optional<User> receipt = this.user.findById(in.getUsername());
        User er = new User();
        er.setRole("error");
        if(receipt.isPresent()){
            if(receipt.get().getPassword().equals(in.getPassword())){
                return receipt.get();
            }
        }
        return er;
    }
}
