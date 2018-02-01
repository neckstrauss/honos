package com.calarcasi.honos.entities.generales;

import com.calarcasi.honos.entities.generales.Tercero;
import java.io.Serializable;
import javax.persistence.*;

/**
 * Entity implementation class for Entity: Natural
 *
 */
@Entity

public class Natural extends Tercero implements Serializable {

	
	private static final long serialVersionUID = 1L;

	@Column(name="PRIMER_NOMBRE")
	private String primerNombre;
	
	@Column(name="SEGUNDO_NOMBRE")
	private String segundoNombre;
	
	@Column(name="PRIMER_APELLIDO")
	private String primerApellido;
	
	@Column(name="SEGUNDO_APELLIDO")
	private String segundoApellido;
	
	public Natural() {
		super();
	}

	public String getPrimerNombre() {
		return primerNombre;
	}

	public void setPrimerNombre(String primerNombre) {
		this.primerNombre = primerNombre;
	}

	public String getSegundoNombre() {
		return segundoNombre;
	}

	public void setSegundoNombre(String segundoNombre) {
		this.segundoNombre = segundoNombre;
	}

	public String getPrimerApellido() {
		return primerApellido;
	}

	public void setPrimerApellido(String primerApellido) {
		this.primerApellido = primerApellido;
	}

	public String getSegundoApellido() {
		return segundoApellido;
	}

	public void setSegundoApellido(String segundoApellido) {
		this.segundoApellido = segundoApellido;
	}
	
	
   
}
