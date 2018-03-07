package com.calarcasi.honos.entities.generales;

import javax.persistence.Column;
import javax.persistence.Entity;

/**
 * Entity implementation class for Entity: MiembroComiteConciliacion
 *
 */
@Entity
public class MiembroComiteConciliacion extends Natural {
	
	@Column(name="TIPO_MIEMBRO")
	private String tipo;
	
	private static final long serialVersionUID = 1L;

	public MiembroComiteConciliacion() {
		super();
	}	

	public String getTipo() {
		return tipo;
	}

	public void setTipo(String tipo) {
		this.tipo = tipo;
	}
	  
}
