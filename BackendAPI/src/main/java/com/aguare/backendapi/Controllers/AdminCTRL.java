package com.aguare.backendapi.Controllers;

import com.aguare.backendapi.DAO.InventoryDAO;

import com.aguare.backendapi.DAO.ListProductsDAO;
import com.aguare.backendapi.DAO.ProductDAO;
import com.aguare.backendapi.DAO.SaleDAO;
import com.aguare.backendapi.Entitys.Inventory;
import com.aguare.backendapi.Entitys.ListProducts;
import com.aguare.backendapi.Entitys.Product;
import lombok.extern.slf4j.Slf4j;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@Slf4j
@CrossOrigin(origins = "http://localhost:4200")
public class AdminCTRL {

    private InventoryDAO inventory;
    private SaleDAO sale;
    private ListProductsDAO listProducts;
    private ProductDAO product;

    @GetMapping("/Report1")
    public Iterable<ListProducts> top10ProductsMoreSold(){
        return this.listProducts.report1();
    }
}
