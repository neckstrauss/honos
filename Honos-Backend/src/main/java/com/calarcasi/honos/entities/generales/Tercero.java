package com.calarcasi.honos.entities.generales;

import java.io.Serializable;
import java.lang.String;
import javax.persistence.*;

/**
 * Entity implementation class for Entity: ConciliacionPrejudicial
 *
 */
@Entity

public class Tercero implements Serializable {

	@Id	
	@GeneratedValue(strategy=GenerationType.IDENTITY)
	private int id;
	
	@Column(name="TIPO_DOCUMENTO")
	private String tipoDocumento;
	
	@Column(name="NUMERO_DOCUMENTO")
	private int numeroDocumento;
	
	private String direccion;
	
	@Column(name="NUMERO_CONTACTO")
	private int numeroContacto;
	
	private String estado;
	
	private static final long serialVersionUID = 1L;

	public Tercero() {
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
	public String getTipoDocumento() {
		return tipoDocumento;
	}
	public void setTipoDocumento(String tipoDocumento) {
		this.tipoDocumento = tipoDocumento;
	}
	public int getNumeroDocumento() {
		return numeroDocumento;
	}
	public void setNumeroDocumento(int numeroDocumento) {
		this.numeroDocumento = numeroDocumento;
	}
	public String getDireccion() {
		return direccion;
	}
	public void setDireccion(String direccion) {
		this.direccion = direccion;
	}
	public int getNumeroContacto() {
		return numeroContacto;
	}
	public void setNumeroContacto(int numeroContacto) {
		this.numeroContacto = numeroContacto;
	}
	
	
   
}
