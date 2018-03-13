package com.calarcasi.honos.entities.comiteConciliacion;

import java.io.Serializable;

import javax.persistence.Basic;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
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
//@IdClass(AsistenteComitePk.class)
public class AsistenteComite implements Serializable {

	
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private Long id;
	
	
	@Column(name="COMITE_ID")	
    private Long comite;
    
	
    public Long getId() {
		return id;
	}

	public void setId(Long id) {
		this.id = id;
	}

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

	public Long getComite() {
		return comite;
	}

	public void setComite(Long comite) {
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
