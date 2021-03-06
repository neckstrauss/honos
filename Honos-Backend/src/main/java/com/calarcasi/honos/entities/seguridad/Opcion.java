package com.calarcasi.honos.entities.seguridad;

import java.io.Serializable;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.NamedQueries;
import javax.persistence.NamedQuery;

/**
 * Entity implementation class for Entity: Opcion
 *
 */
@Entity
@NamedQueries(value = { 
		@NamedQuery(name = Opcion.AllOpciones, query = "SELECT o FROM Opcion o"),
		@NamedQuery(name = Opcion.OpcionesMenu, query = "SELECT o FROM Opcion o where o not in (select mo from Menu m JOIN m.opciones mo WHERE m.id = :idMenu) and o.estado LIKE 'ACT'"),
		})
public class Opcion implements Serializable {

	public final static String AllOpciones = "Opcion.findAll";
	public final static String OpcionesMenu = "Opcion.opcionesMenu";

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private int id;

	@Column(length = 30)
	private String label;

	@Column(length = 30)
	private String uri;

	@Column(length = 3)
	private String estado;

	private static final long serialVersionUID = 1L;

	public Opcion() {
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

	public String getUri() {
		return this.uri;
	}

	public void setUri(String uri) {
		this.uri = uri;
	}

	public String getEstado() {
		return this.estado;
	}

	public void setEstado(String estado) {
		this.estado = estado;
	}

}
