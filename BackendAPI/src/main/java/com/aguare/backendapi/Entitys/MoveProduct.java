package com.aguare.backendapi.Entitys;

import java.io.Serializable;

public class MoveProduct implements Serializable {

    private Inventory entry;
    private int amountMove;
    private Long idBranch;

    public MoveProduct(Inventory entry, int amountMove, Long idBranch) {
        this.entry = entry;
        this.amountMove = amountMove;
        this.idBranch = idBranch;
    }

    public Inventory getEntry() {
        return entry;
    }

    public void setEntry(Inventory entry) {
        this.entry = entry;
    }

    public int getAmountMove() {
        return amountMove;
    }

    public void setAmountMove(int amountMove) {
        this.amountMove = amountMove;
    }

    public Long getIdBranch() {
        return idBranch;
    }

    public void setIdBranch(Long idBranch) {
        this.idBranch = idBranch;
    }
}
