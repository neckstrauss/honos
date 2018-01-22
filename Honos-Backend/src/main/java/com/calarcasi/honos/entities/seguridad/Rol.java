package com.calarcasi.honos.entities.seguridad;

import java.io.Serializable;
import java.lang.String;
import java.util.List;

import javax.persistence.*;

/**
 * Entity implementation class for Entity: Rol
 *
 */
@Entity
@NamedQuery(name=Rol.AllRoles, query="SELECT r FROM Rol r")
public class Rol implements Serializable {

	public final static String AllRoles = "Rol.findAll";	
	
	   
	@Id
	@GeneratedValue(strategy=GenerationType.IDENTITY)
	private int id;
	
	@Column(length=30)
	private String nombre;
	
	@Column(length=240)
	private String descripcion;
	
	@Column(length=3)
	private String estado;
	
	private static final long serialVersionUID = 1L;

	@ManyToMany
	@JoinTable(name="MENUS_ROL",
	joinColumns=@JoinColumn(name="ROL_ID"),
	inverseJoinColumns=@JoinColumn(name="MENU_ID"))
	private List<Menu> menus;
		
	public Rol() {
		super();
	}   
	public int getId() {
		return this.id;
	}

	public void setId(int id) {
		this.id = id;
	}   
	public String getNombre() {
		return this.nombre;
	}

	public void setNombre(String nombre) {
		this.nombre = nombre;
	}   
	public String getDescripcion() {
		return this.descripcion;
	}

	public void setDescripcion(String descripcion) {
		this.descripcion = descripcion;
	}   
	public String getEstado() {
		return this.estado;
	}

	public void setEstado(String estado) {
		this.estado = estado;
	}
	public List<Menu> getMenus() {
		return menus;
	}
	public void setMenus(List<Menu> menus) {
		this.menus = menus;
	}
	
	
   
}
