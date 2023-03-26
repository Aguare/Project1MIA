package com.aguare.backendapi.DAO;

import com.aguare.backendapi.Entitys.Sale;
import org.springframework.data.repository.CrudRepository;

public interface SaleDAO extends CrudRepository<Sale, Long> {
}
