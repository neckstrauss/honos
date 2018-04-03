package com.calarcasi.honos.entities.comiteConciliacion;

import static javax.persistence.CascadeType.ALL;

import java.io.Serializable;
import java.util.Date;
import java.util.List;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.JoinTable;
import javax.persistence.ManyToMany;
import javax.persistence.OneToMany;
import javax.persistence.Table;
import javax.persistence.Temporal;
import javax.persistence.TemporalType;

import com.calarcasi.honos.entities.MyDate;
import com.calarcasi.honos.entities.comiteConciliacion.fichaTecnica.FichaTecnica;
import com.calarcasi.honos.entities.generales.Apoderado;

/**
 * Entity implementation class for Entity: ComiteConciliacion
 *
 */
@Entity
@Table(name="COMITE_CONCILIACION")
public class ComiteConciliacion  implements Serializable {

	public final static String TodosLosComites = "ComiteConciliacion.getTodosLosComites";
	
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private Long id;
	
	@Temporal(TemporalType.TIMESTAMP)
	@Column(name="FECHA_COMITE")
	private Date fechaComite;	
	
	@Temporal(TemporalType.TIMESTAMP)
	@Column(name="FECHA_LIMITE_RECEPCION")
	private Date fechaLimiteRecepcion;
	
	@Column(name="TIPO_COMITE")
	private String tipoComite;
	
	@Column(name="MOTIVO_CANCELACION")
	private String motivoCancelacion;
	
	private String estado;
	
	@OneToMany(cascade = ALL, orphanRemoval=true)
	@JoinColumn(name="COMITE_ID")
	private List<AsistenteComite> asistentes;
	
	@OneToMany
	@JoinColumn(name="COMITE_ID")	
	private List<FichaTecnica> fichasTecnicas;
	
	@ManyToMany
	@JoinTable(name="APODERADOS_COMITE_EXTRAORDINARIO",
	joinColumns=@JoinColumn(name="COMITE_ID"),
	inverseJoinColumns=@JoinColumn(name="APODERADO_ID"))
	private List<Apoderado> apoderadosExtraordinario;
	
	@Column(name="PROPOSICIONES")
	private String proposiciones;
	
	@Column(name="HORA_FINAL")
	private String horaFinal;
	
	private static final long serialVersionUID = 1L;

	public ComiteConciliacion() {
		super();
	}

	public Long getId() {
		return id;
	}

	public void setId(Long id) {
		this.id = id;
	}

	
	public String getMotivoCancelacion() {
		return motivoCancelacion;
	}

	public void setMotivoCancelacion(String motivoCancelacion) {
		this.motivoCancelacion = motivoCancelacion;
	}

	public String getEstado() {
		return estado;
	}

	public void setEstado(String estado) {
		this.estado = estado;
	}

	public List<AsistenteComite> getAsistentes() {
		return asistentes;
	}

	public void setAsistentes(List<AsistenteComite> asistentes) {
		this.asistentes = asistentes;
	}

//	public List<FichaTecnica> getFichasTecnicas() {
//		return fichasTecnicas;
//	}
//
//	public void setFichasTecnicas(List<FichaTecnica> fichasTecnicas) {
//		this.fichasTecnicas = fichasTecnicas;
//	}
	
	public List<Apoderado> getApoderadosExtraordinario() {
		return apoderadosExtraordinario;
	}

	public void setApoderadosExtraordinario(List<Apoderado> apoderadosExtraordinario) {
		this.apoderadosExtraordinario = apoderadosExtraordinario;
	}

	
	public String getProposiciones() {
		return proposiciones;
	}

	public void setProposiciones(String proposiciones) {
		this.proposiciones = proposiciones;
	}

	public String getHoraFinal() {
		return horaFinal;
	}

	public void setHoraFinal(String horaFinal) {
		this.horaFinal = horaFinal;
	}

	
	
	public Date getFechaComite() {
		return fechaComite;
	}

	public void setFechaComite(MyDate fechaComite) {
		this.fechaComite = fechaComite;
	}

	public String getTipoComite() {
		return tipoComite;
	}

	public void setTipoComite(String tipoComite) {
		this.tipoComite = tipoComite;
	}
	

	public List<FichaTecnica> getFichasTecnicas() {
		return fichasTecnicas;
	}

	public void setFichasTecnicas(List<FichaTecnica> fichasTecnicas) {
		this.fichasTecnicas = fichasTecnicas;
	}

	@Override
	public String toString() {
		return "ComiteConciliacion [id=" + id + ", fechaComite=" + fechaComite + ", tipoComite=" + tipoComite
				+ ", estado=" + estado + "]";
	}

	public Date getFechaLimiteRecepcion() {
		return fechaLimiteRecepcion;
	}

	public void setFechaLimiteRecepcion(MyDate fechaLimiteRecepcion) {
		this.fechaLimiteRecepcion = fechaLimiteRecepcion;
	}

	
	
}
