package com.aguare.backendapi.Controllers;

import com.aguare.backendapi.DAO.InventoryDAO;
import com.aguare.backendapi.DAO.ProductDAO;
import com.aguare.backendapi.Entitys.Alert;
import com.aguare.backendapi.Entitys.Product;
import com.aguare.backendapi.Entitys.ProductBranch;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.web.bind.annotation.*;

import java.util.Optional;

@RestController
@Slf4j
@CrossOrigin(origins = "http://localhost:4200")
public class ProductCTRL {

    @Autowired
    private ProductDAO product;


    @GetMapping("/GetProductId")
    public Product getProduct(Long idProduct) {
        return product.findById(idProduct).get();
    }

    @PutMapping("/UpdateProduct")
    public Alert updateProduct(@RequestBody Product in) {
        Optional<Product> receipt = this.product.findById(in.getIdProduct());
        if (receipt.isPresent()) {
            product.save(in);
            return new Alert("Registro actualizado", "Éxito!", "success", true);
        } else {
            return new Alert("El producto no existe", "Error", "danger", true);
        }
    }

    @PostMapping("/AddProduct")
    public Alert addProduct(@RequestBody Product in) {
        Optional<Product> receipt = this.product.findById(in.getIdProduct());
        if (receipt.isPresent()) {
            return new Alert("El producto ya existe", "Error", "danger", true);
        } else {
            product.save(in);
            return new Alert("Registro realizado", "Éxito!", "success", true);
        }
    }


}
