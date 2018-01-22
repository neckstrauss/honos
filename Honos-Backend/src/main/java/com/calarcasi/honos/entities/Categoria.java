package com.calarcasi.honos.entities;

import java.io.Serializable;
import javax.persistence.*;


/**
 * The persistent class for the categoria database table.
 * 
 */
@Entity
@Table(name="categoria")
@NamedQuery(name=Categoria.AllCategorias, query="SELECT c FROM Categoria c")
public class Categoria extends AbsEntity implements Serializable {
	private static final long serialVersionUID = 1L;

	public final static String AllCategorias = "Categoria.findAll";
	
	
	@Id
	@GeneratedValue(strategy=GenerationType.IDENTITY)
	@Column(unique=true, nullable=false)
	private Long id;

	@Column(length=120)
	private String nombre;

	public Categoria() {
	}

	public Long getId() {
		return this.id;
	}

	public void setId(Long id) {
		this.id = id;
	}

	public String getNombre() {
		return this.nombre;
	}

	public void setNombre(String nombre) {
		this.nombre = nombre;
	}

	@Override
	public String getEstado() {
		// TODO Auto-generated method stub
		return null;
	}

}