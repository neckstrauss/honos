package com.calarcasi.honos.entities.generales;

import com.calarcasi.honos.entities.generales.Tercero;
import java.io.Serializable;
import javax.persistence.*;

/**
 * Entity implementation class for Entity: Juridico
 *
 */
@Entity

public class Juridica extends Tercero implements Serializable {

	
	private static final long serialVersionUID = 1L;
	
	@Column(name="RAZON_SOCIAL")
	private String razonSocial;
	
	@Column(name="NOMBRE_REPRESENTANTE")
	private String nombreRepresentante;

	public Juridica() {
		super();
	}

	public String getRazonSocial() {
		return razonSocial;
	}

	public void setRazonSocial(String razonSocial) {
		this.razonSocial = razonSocial;
	}

	public String getNombreRepresentante() {
		return nombreRepresentante;
	}

	public void setNombreRepresentante(String nombreRepresentante) {
		this.nombreRepresentante = nombreRepresentante;
	}
	
	public String getNombreCompleto()
	{
		return this.razonSocial;
	}
	
   
}
