package com.calarcasi.honos.entities.comiteConciliacion;

import java.io.Serializable;

import javax.persistence.Basic;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.IdClass;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.Table;

import com.calarcasi.honos.entities.generales.MiembroComiteConciliacion;

/**
 * Entity implementation class for Entity: AsistentesComite
 *
 */
@Entity
@Table(name="ASISTENTES_COMITE")
@IdClass(AsistenteComitePk.class)
public class AsistenteComite implements Serializable {

	
	@Id	
    @Column(name="COMITE_ID")	
    private int comite;
    
	@Id
    @ManyToOne
    @JoinColumn(name="MIEMBRO_ID")
    private MiembroComiteConciliacion miembro;

    @Basic
    @Column(name="RAZON_INASISTENCIA")
    private String razonInasistencia;
	
	private static final long serialVersionUID = 1L;

	public AsistenteComite() {
		super();
	}

	public int getComite() {
		return comite;
	}

	public void setComite(int comite) {
		this.comite = comite;
	}

	public MiembroComiteConciliacion getMiembro() {
		return miembro;
	}

	public void setMiembro(MiembroComiteConciliacion miembro) {
		this.miembro = miembro;
	}

	public String getRazonInasistencia() {
		return razonInasistencia;
	}

	public void setRazonInasistencia(String razonInasistencia) {
		this.razonInasistencia = razonInasistencia;
	}

	

	
   
	
	
}
