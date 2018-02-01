package com.calarcasi.honos.entities.generales;

import com.calarcasi.honos.entities.generales.Natural;
import java.io.Serializable;
import javax.persistence.*;

/**
 * Entity implementation class for Entity: Apoderado
 *
 */
@Entity

public class Apoderado extends Natural implements Serializable {

	
	private static final long serialVersionUID = 1L;
	
	@Column(name="URL_FOTO")
	private String urlFoto;
	
	@Column(name="NUMERO_TARJETA_PROFESIONAL")
	private Long numeroTarjetaProfesional;
	
	private String email;

	public Apoderado() {
		super();
	}

	public String getUrlFoto() {
		return urlFoto;
	}

	public void setUrlFoto(String urlFoto) {
		this.urlFoto = urlFoto;
	}

	public Long getNumeroTarjetaProfesional() {
		return numeroTarjetaProfesional;
	}

	public void setNumeroTarjetaProfesional(Long numeroTarjetaProfesional) {
		this.numeroTarjetaProfesional = numeroTarjetaProfesional;
	}

	public String getEmail() {
		return email;
	}

	public void setEmail(String email) {
		this.email = email;
	}
	
	
   
}
