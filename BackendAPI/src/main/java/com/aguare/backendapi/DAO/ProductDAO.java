package com.aguare.backendapi.DAO;

import com.aguare.backendapi.Entitys.Product;
import com.aguare.backendapi.Entitys.ProductBranch;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.CrudRepository;

import java.util.List;

public interface ProductDAO extends CrudRepository<Product, Long> {

    @Query(value = "SELECT p.id_product FROM product p WHERE p.id_product = (SELECT MAX(p2.id_product) FROM product p2)", nativeQuery = true)
    Long queryTopByIdProduct();

}
