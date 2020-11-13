package com.qosoft.billing.api.controllers;

import com.qosoft.billing.api.models.entity.Client;
import com.qosoft.billing.api.models.services.ClientServiceImpl;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@CrossOrigin(origins = "http://localhost:4200")
@RestController
@RequestMapping("/api")
public class ClientRestController {
    @Autowired
    private ClientServiceImpl clientServiceImpl;

    @GetMapping("/clients")
    public List<Client> index() {
        return clientServiceImpl.findAll();
    }

    @PostMapping("/clients")
    @ResponseStatus(HttpStatus.CREATED)
    public Client create(@RequestBody Client client) {
        return clientServiceImpl.save(client);
    }

    @GetMapping("/clients/{id}")
    public Client show(@PathVariable Long id) {
        return clientServiceImpl.findById(id);
    }
}
