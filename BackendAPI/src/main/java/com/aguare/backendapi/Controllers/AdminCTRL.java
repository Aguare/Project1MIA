package com.aguare.backendapi.Controllers;

import com.aguare.backendapi.DAO.InventoryDAO;

import com.aguare.backendapi.DAO.ListProductsDAO;
import com.aguare.backendapi.DAO.ProductDAO;
import com.aguare.backendapi.DAO.SaleDAO;
import com.aguare.backendapi.Entitys.ListProducts;
import com.aguare.backendapi.Entitys.Sale;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.ArrayList;
import java.util.List;
import java.util.Objects;

@RestController
@Slf4j
@CrossOrigin(origins = "http://localhost:4200")
public class AdminCTRL {

    @Autowired
    private InventoryDAO inventory;
    @Autowired
    private SaleDAO sale;
    @Autowired
    private ListProductsDAO listProducts;
    @Autowired
    private ProductDAO product;

    @GetMapping("/Report1")
    public Iterable<Object> top10ProductsMoreSold(){
        return this.listProducts.findTop10ProductsSold();
    }

    @GetMapping("/Report2")
    public Iterable<Object> top10ClientMorePay(){
        return this.sale.findTop10CustomersByRevenue();
    }

    @GetMapping("/Report3")
    public Iterable<Object> top3BranchesMorePay(){
        return this.sale.findTop3BranchesByRevenue();
    }

    @GetMapping("/Report4")
    public Iterable<Object> top3BranchesByIncome(){
        return this.sale.findTop3BranchesByIncome();
    }

    @GetMapping("/Report5")
    public Iterable<Object> top3EmployeeMoreSales(){
        return this.sale.findTop3EmployeesBySales();
    }

    @GetMapping("/Report6")
    public Iterable<Object> top3EmployeeMoreIncome(){
        return this.sale.findTop3EmployeesByIncome();
    }

    @GetMapping("/Report9")
    public Iterable<ListProducts> top5ProductsMoreSoldByBranch(Long id){
        return listProducts.findTop5MoreSaleIdBranch(id);
    }

    @GetMapping("/Report10")
    public Iterable<Object> top5ProductsMoreSoldByBranchAndCategory(Long id){
        return this.listProducts.findTop5MoreAvenue(id);
    }
}
