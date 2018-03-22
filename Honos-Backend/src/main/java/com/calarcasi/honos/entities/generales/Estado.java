package com.calarcasi.honos.entities.generales;

import java.io.Serializable;
import java.lang.String;
import javax.persistence.*;

/**
 * Entity implementation class for Entity: Estado
 *
 */
@Entity

public class Estado<T> implements Serializable {
	
	@Id
	@Column(length=3)
	private String id;
	private String nombre;
	private static final long serialVersionUID = 1L;

	public Estado() {
		super();
	}
	
	public Estado(String id) {
		super();
		this.id = id;
	}
	
	public  Estado evaluarEstado(T t) {return null;};
	
	public String getId() {
		return this.id;
	}

	public void setId(String id) {
		this.id = id;
	}   
	public String getNombre() {
		return this.nombre;
	}

	public void setNombre(String nombre) {
		this.nombre = nombre;
	}
   
}
