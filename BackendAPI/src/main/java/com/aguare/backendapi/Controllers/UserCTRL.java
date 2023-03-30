package com.aguare.backendapi.Controllers;

import com.aguare.backendapi.DAO.EmployeeDAO;
import com.aguare.backendapi.DAO.UserDAO;
import com.aguare.backendapi.Entitys.Alert;
import com.aguare.backendapi.Entitys.User;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.Optional;

@RestController
@Slf4j
@CrossOrigin(origins = "http://localhost:4200")
public class UserCTRL {

    @Autowired
    private UserDAO user;

    @Autowired
    private EmployeeDAO employee;

    @PostMapping("/AddUser")
    public Alert addUser(@RequestBody User in){
        try{
            this.employee.save(in.getFk_dpi());
            this.user.save(in);
            return new Alert("Usuario agregado correctamente","Exito!", "success", true);
        }catch (Exception e){
            return new Alert("Error al agregar usuario","Error", "danger", true);
        }
    }

    @PutMapping("/UpdateUser")
    public Alert updateUser(@RequestBody User in){
        Optional<User> receipt = this.user.findById(in.getUsername());
        if(receipt.isPresent()){
            this.employee.save(in.getFk_dpi());
            this.user.save(in);
            return new Alert("Usuario actualizado correctamente","Exito!", "success", true);
        }else{
            return new Alert("El usuario no existe","Error", "danger", true);
        }
    }

    @GetMapping("/GetUser")
    public User getUser(String username){
        Optional<User> receipt = this.user.findById(username);
        if(receipt.isPresent()){
            return receipt.get();
        }else{
            return null;
        }
    }
}
