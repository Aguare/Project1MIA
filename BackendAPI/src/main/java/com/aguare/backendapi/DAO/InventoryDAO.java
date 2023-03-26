package com.aguare.backendapi.DAO;

import com.aguare.backendapi.Entitys.Inventory;
import org.springframework.data.repository.CrudRepository;

public interface InventoryDAO extends CrudRepository<Inventory, Long> {
}
