package com.aguare.backendapi.Controllers;


import com.aguare.backendapi.DAO.ClientDAO;
import com.aguare.backendapi.DAO.InventoryDAO;
import com.aguare.backendapi.DAO.ListProductsDAO;
import com.aguare.backendapi.DAO.SaleDAO;
import com.aguare.backendapi.Entitys.*;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

@RestController
@Slf4j
@CrossOrigin(origins = "http://localhost:4200")
public class SaleCTRL {

    @Autowired
    private SaleDAO sale;
    @Autowired
    private ListProductsDAO listProducts;
    @Autowired
    private InventoryDAO inventory;

    @Autowired
    private ClientDAO client;

    @GetMapping("/GetLastSaleByNit")
    public Sale getLastSaleByNIT(String nit){
        return sale.getLastSaleByNit(nit);
    }

    @PostMapping("/AddSale")
    public Alert addSale(@RequestBody SaleGroup in2){
        Alert alert = new Alert("Error al realizar la venta", "Error", "danger", true);
        try{
            boolean client = this.client.existsById(in2.getSale().getNit());
            sale.save(in2.getSale());
            Long idSale = sale.getIdLastSale();
            Long idBranch = in2.getSale().getIdBranch();
            for (ListProducts list : in2.getListProducts())
            {
                list.setIdSale(idSale);
                listProducts.save(list);
                Inventory inv = inventory.findByIdInventory_IdBranchAndIdInventory_IdProduct(idBranch, list.getIdProduct().getIdProduct());
                inv.setQuantity(inv.getQuantity() - list.getQuantity());
                inventory.save(inv);
                alert = new Alert("Venta realizada", "Éxito!", "success", true);
            }
        }catch (Exception e){
            alert = new Alert("Error al realizar la venta", "Error", "danger", true);
        }
        return alert;
    }
}
