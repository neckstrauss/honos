package com.calarcasi.honos.entities.conciliacionPrejudicial;

import java.io.Serializable;
import java.lang.String;
import javax.persistence.*;

/**
 * Entity implementation class for Entity: ConciliacionPrejudicial
 *
 */
@Entity

public class ConciliacionPrejudicial implements Serializable {

	@Id	
	@GeneratedValue(strategy=GenerationType.IDENTITY)
	private int id;
	private String estado;
	private static final long serialVersionUID = 1L;

	public ConciliacionPrejudicial() {
		super();
	}   
	public int getId() {
		return this.id;
	}

	public void setId(int id) {
		this.id = id;
	}   
	public String getEstado() {
		return this.estado;
	}

	public void setEstado(String estado) {
		this.estado = estado;
	}
   
}
