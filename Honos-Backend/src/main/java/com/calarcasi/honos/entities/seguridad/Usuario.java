package com.calarcasi.honos.entities.seguridad;

import java.io.Serializable;
import java.lang.String;
import javax.persistence.*;

/**
 * Entity implementation class for Entity: Usuario
 *
 */
@Entity
@NamedQuery(name=Usuario.AllUsuarios, query="SELECT u FROM Usuario u")
public class Usuario implements Serializable {

	public final static String AllUsuarios = "Usuario.findAll";	   
	
	@Id
	@GeneratedValue(strategy=GenerationType.IDENTITY)
	private int id;
	
	@Column(length=30)
	private String usuario;
	
	@Column(length=30)
	private String password;
	
	@Column(length=3)
	private String estado;
	
	
	private static final long serialVersionUID = 1L;
	
	@ManyToOne
	@JoinColumn(name="ROL_ID")
	private Rol rol;	

	public Usuario() {
		super();
	}   
	public int getId() {
		return this.id;
	}

	public void setId(int id) {
		this.id = id;
	}   
	public String getUsuario() {
		return this.usuario;
	}

	public void setUsuario(String usuario) {
		this.usuario = usuario;
	}   
	public String getPassword() {
		return this.password;
	}

	public void setPassword(String password) {
		this.password = password;
	}   
	public String getEstado() {
		return this.estado;
	}

	public void setEstado(String estado) {
		this.estado = estado;
	}
	public Rol getRol() {
		return rol;
	}
	public void setRol(Rol rol) {
		this.rol = rol;
	}
	
	
	
}
