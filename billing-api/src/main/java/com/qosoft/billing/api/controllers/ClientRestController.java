package com.qosoft.billing.api.controllers;

import com.qosoft.billing.api.models.entity.Client;
import com.qosoft.billing.api.models.services.ClientServiceImpl;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@RequestMapping("/api")
public class ClientRestController {
    @Autowired
    private ClientServiceImpl clientServiceImpl;

    @GetMapping("/clients")
    public List<Client> index() {
        return clientServiceImpl.findAll();
    }
}
