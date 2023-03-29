package com.aguare.backendapi.DAO;

import com.aguare.backendapi.Entitys.Inventory;
import jakarta.transaction.Transactional;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.CrudRepository;
import org.springframework.data.repository.query.Param;

import javax.swing.text.html.Option;
import java.util.Optional;

public interface InventoryDAO extends CrudRepository<Inventory, Long> {
    Iterable<Inventory> findAllByIdInventory_IdBranch(Long idBranch);

    @Query("SELECT i FROM Inventory i WHERE i.branch.idBranch = :idB AND i.product.name_p ILIKE :prod% ORDER BY i.product.name_p ASC LIMIT 5")
    Iterable<Inventory> search(@Param("idB") Long idBranch, @Param("prod") String product);
}
