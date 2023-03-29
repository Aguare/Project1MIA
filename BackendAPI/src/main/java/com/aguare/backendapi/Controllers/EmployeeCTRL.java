package com.aguare.backendapi.Controllers;

import com.aguare.backendapi.DAO.BranchDAO;
import com.aguare.backendapi.DAO.EmployeeDAO;
import com.aguare.backendapi.DAO.UserDAO;
import com.aguare.backendapi.Entitys.Alert;
import com.aguare.backendapi.Entitys.Employee;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.Optional;

@RestController
@Slf4j
@CrossOrigin(origins = "http://localhost:4200")
public class EmployeeCTRL {

    @Autowired
    private EmployeeDAO employee;

    @Autowired
    private UserDAO user;

    @GetMapping("/GetEmployeeDPI")
    public Employee getEmployee(Long dpi){
        return employee.findById(dpi).get();
    }

    @GetMapping("/GetAllEmployee")
    public Iterable<Employee> getAllEmployee(){
        return employee.findAll();
    }

    @GetMapping("/GetEmployeeUserName")
    public Employee getEmployeeUserName(String username){
        return user.findByUsername(username).getFk_dpi();
    }
    @PostMapping("/AddEmployee")
    public Alert addEmployee(@RequestBody Employee employee){
        try{
            this.employee.save(employee);
            return new Alert("Empleado agregado correctamente","Exito!", "success", true);
        }catch (Exception e){
            return new Alert("Error al agregar empleado","Error", "danger", true);
        }
    }

    @PutMapping("/UpdateEmployee")
    public Alert updateEmployee(@RequestBody Employee in){
        Optional<Employee> receipt = this.employee.findById(in.getDPI());
        if(receipt.isPresent()){
            this.employee.save(in);
            return new Alert("Empleado actualizado correctamente","Exito!", "success", true);
        }else{
            return new Alert("El empleado no existe","Error", "danger", true);
        }
    }
}
