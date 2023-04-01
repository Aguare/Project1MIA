package com.aguare.backendapi.Controllers;

import com.aguare.backendapi.DAO.BranchDAO;
import com.aguare.backendapi.Entitys.Branch;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@Slf4j
@CrossOrigin(origins = "http://localhost:4200")
public class BranchCTRL {

    @Autowired
    private BranchDAO branch;

    @GetMapping("/GetBranchId")
    public Branch getBranchID(Long id){
        return branch.findById(id).get();
    }
}
