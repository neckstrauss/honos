package com.calarcasi.honos.entities.seguridad;

import java.io.Serializable;
import java.util.List;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.JoinTable;
import javax.persistence.ManyToMany;
import javax.persistence.NamedQueries;
import javax.persistence.NamedQuery;

/**
 * Entity implementation class for Entity: Menu
 *
 */
@Entity
@NamedQueries(value = { 
	@NamedQuery(name=Menu.AllMenus, query="SELECT m FROM Menu m"),
	@NamedQuery(name=Menu.MenusRol, query="SELECT m FROM Menu m where m not in (select rm from Rol r JOIN r.menus rm WHERE r.id = :idRol)"),
	
}
)

public class Menu implements Serializable {

	private static final long serialVersionUID = 1L;
	
	public final static String AllMenus = "Menu.findAll";
	public final static String MenusRol = "Menu.MenusRol";
	
	@Id
	@GeneratedValue(strategy=GenerationType.IDENTITY)
	private int id;	
	
	@Column(name="ID_DIV_INTERNO", length=30)
	private String idDivInterno;
	
	@Column(length=30)
	private String label;
	
	@Column(length=440)
	private String descripcion;
	
	@Column(length=3)
	private String estado;
		
	@ManyToMany
	@JoinTable(name="OPCIONES_MENU",
	joinColumns=@JoinColumn(name="MENU_ID"),
	inverseJoinColumns=@JoinColumn(name="OPCION_ID"))
	private List<Opcion> opciones;

	public Menu() {
		super();
	}   
	public int getId() {
		return this.id;
	}

	public void setId(int id) {
		this.id = id;
	}   
	public String getLabel() {
		return this.label;
	}

	public void setLabel(String label) {
		this.label = label;
	}   
	public String getDescripcion() {
		return this.descripcion;
	}

	public void setDescripcion(String descripcion) {
		this.descripcion = descripcion;
	}   
	public String getIdDivInterno() {
		return this.idDivInterno;
	}

	public void setIdDivInterno(String idDivInterno) {
		this.idDivInterno = idDivInterno;
	}   
	public String getEstado() {
		return this.estado;
	}

	public void setEstado(String estado) {
		this.estado = estado;
	}
	public List<Opcion> getOpciones() {
		return opciones;
	}
	public void setOpciones(List<Opcion> opciones) {
		this.opciones = opciones;
	}
   
	
}
