package com.aguare.backendapi.Controllers;

import com.aguare.backendapi.DAO.InventoryDAO;
import com.aguare.backendapi.DAO.ProductDAO;
import com.aguare.backendapi.Entitys.*;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.Optional;

@RestController
@Slf4j
@CrossOrigin(origins = "http://localhost:4200")
public class InventoryCTRL {

    @Autowired
    private InventoryDAO inventory;

    @Autowired
    private ProductDAO product;

    @PutMapping("UpdateInventory")
    public Alert updateInventory(@RequestBody Inventory inv){
        Inventory inv2 = inventory.findByIdInventory_IdBranchAndIdInventory_IdProduct(inv.getBranch().getIdBranch(), inv.getProduct().getIdProduct());
        if(inv2 != null){
            inv.setIdInventory(inv2.getIdInventory());
            inventory.save(inv);
            return new Alert("Producto actualizado correctamente","Exito!", "success", true);
        }else{
            return new Alert("El producto no existe","Error", "danger", true);
        }
    }

    @PostMapping("/AddInventory")
    public Alert addInventory(@RequestBody Inventory inv){
        Inventory inv2 = inventory.findByIdInventory_IdBranchAndIdInventory_IdProduct(inv.getBranch().getIdBranch(), inv.getProduct().getIdProduct());
        if(inv2 != null){
            return new Alert("El producto ya existe","Error", "danger", true);
        }else{
            Long idProd = this.product.queryTopByIdProduct();
            this.product.save(inv.getProduct());
            inv.getProduct().setIdProduct(idProd);
            inv.setIdInventory(new IdInventory(idProd, inv.getBranch().getIdBranch()));
            inventory.save(inv);
            return new Alert("Inventario agregado correctamente","Exito!", "success", true);
        }
    }

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

    @GetMapping("/GetProductByBranchAndProductId")
    public Inventory getInventoyByBranchAndProductId(Long idBranch, Long idProduct) {
        return inventory.findByIdInventory_IdBranchAndIdInventory_IdProduct(idBranch, idProduct);
    }

    @GetMapping("/SearchProduct")
    public Iterable<Inventory> getInventoryByBranchAndProductStartingWith(Long idBranch, String product) {
        return inventory.search(idBranch, product.toLowerCase());
    }

    @PutMapping("/MoveProducts")
    public Alert moveProducts(@RequestBody MoveProduct move){
        Inventory inv = this.inventory.findByIdInventory_IdBranchAndIdInventory_IdProduct(move.getEntry().getBranch().getIdBranch(), move.getEntry().getProduct().getIdProduct());
        if(inv != null){
            if(inv.getQuantity() >= move.getAmountMove()){
                inv.setQuantity(inv.getQuantity() - move.getAmountMove());
                this.inventory.save(inv);
                Inventory inv2 = this.inventory.findByIdInventory_IdBranchAndIdInventory_IdProduct(move.getIdBranch(), move.getEntry().getProduct().getIdProduct());
                if(inv2 != null){
                    inv2.setQuantity(inv2.getQuantity() + move.getAmountMove());
                    this.inventory.save(inv2);
                }else{
                    Inventory newInv = new Inventory();
                    newInv.setIdInventory(new IdInventory(move.getIdBranch(), move.getEntry().getProduct().getIdProduct()));
                    newInv.setQuantity(move.getAmountMove());
                    this.inventory.save(newInv);
                }
                return new Alert("Productos movidos correctamente","Exito!", "success", true);
            }else{
                return new Alert("No hay suficientes productos en el inventario","Error", "danger", true);
            }
        }else{
            return new Alert("El producto no existe","Error", "danger", true);
        }
    }
}
