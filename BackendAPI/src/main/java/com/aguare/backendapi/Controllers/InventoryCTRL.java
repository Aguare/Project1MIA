package com.aguare.backendapi.Controllers;

import com.aguare.backendapi.DAO.InventoryDAO;
import com.aguare.backendapi.Entitys.Inventory;
import com.aguare.backendapi.Entitys.Product;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@Slf4j
@CrossOrigin(origins = "http://localhost:4200")
public class InventoryCTRL {

    @Autowired
    private InventoryDAO inventory;

    @GetMapping("/GetInventory")
    public Iterable<Inventory> getInventory() {
        return inventory.findAll();
    }

    @GetMapping("/GetAllProducts")
    public Iterable<Inventory> getAllProducts() {
        return inventory.findAll();
    }

    @GetMapping("/GetAllProductsByBranch")
    public Iterable<Inventory> getInventoryByBranch(Long idBranch) {
        return inventory.findAllByIdInventory_IdBranch(idBranch);
    }

    @GetMapping("/SearchProduct")
    public Iterable<Inventory> getInventoryByBranchAndProductStartingWith(Long idBranch, String product) {
        return inventory.search(idBranch, product.toLowerCase());
    }
}
