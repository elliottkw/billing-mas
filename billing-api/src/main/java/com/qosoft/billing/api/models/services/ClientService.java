package com.qosoft.billing.api.models.services;

import com.qosoft.billing.api.models.entity.Client;

import java.util.List;

public interface ClientService {
    public List<Client> findAll();

    public Client findById(Long id);

    public Client save(Client client);

    public void delete(Long id);
}
