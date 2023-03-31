package com.aguare.backendapi.Controllers;

import com.aguare.backendapi.DAO.ClientDAO;
import com.aguare.backendapi.Entitys.Alert;
import com.aguare.backendapi.Entitys.Client;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@RestController
@Slf4j
@CrossOrigin(origins = "http://localhost:4200")
public class ClientCTRL {

    @Autowired
    private ClientDAO client;

    @PostMapping("/AddClient")
    public Alert getClient(@RequestBody Client in){
        Optional<Client> receipt = this.client.findById(in.getNit());
        if (receipt.isPresent()) {
            return new Alert("El cliente ya existe", "Error", "danger", true);
        }else{
            client.save(in);
            return new Alert("Registro realizado", "Éxito!", "success", true);
        }
    }

    @GetMapping("/GetAllClients")
    public Iterable<Client> getAllClients(){
        return client.findAll();
    }

    @GetMapping("/GetClientNit")
    public Client getClientNit(String nit){
        return client.findById(nit).get();
    }

    @GetMapping("/SearchClientNit")
    public Iterable<Client> searchClient(String nit){
        return client.findByNitLike(nit);
    }
    @PutMapping("/UpdateClient")
    public Alert updateClient(@RequestBody Client in){
        Optional<Client> receipt = this.client.findById(in.getNit());
        if (receipt.isPresent()) {
            client.save(in);
            return new Alert("Registro actualizado", "Éxito!", "success", true);
        }else{
            return new Alert("El cliente no existe", "Error", "danger", true);
        }
    }
}
