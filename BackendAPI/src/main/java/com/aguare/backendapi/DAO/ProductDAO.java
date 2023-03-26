package com.aguare.backendapi.DAO;

import com.aguare.backendapi.Entitys.Product;
import org.springframework.data.repository.CrudRepository;

public interface ProductDAO extends CrudRepository<Product, Long> {
}
