package com.aguare.backendapi.DAO;

import com.aguare.backendapi.Entitys.Product;
import com.aguare.backendapi.Entitys.ProductBranch;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.CrudRepository;

import java.util.List;

public interface ProductDAO extends CrudRepository<Product, Long> {

}
